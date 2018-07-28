import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { sendMessage } from '../../store/actions/ChatActions';
import {
  messageFroms,
  chatModes,
  liveSupportChat,
  INITIAL_BOT_ID,
  INITIAL_LIVE_ID,
  botSupportChat
} from '../../constants';

import ChatArea from './ChatArea';
import TypeArea from './TypeArea';

const styles = {
  root: {
    padding: 10
  }
};

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTypeDisabled: false
    };
  }

  componentDidMount() {
    this.handleInitialBotMessages();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.lastMessageFrom !== messageFroms.USER &&
      this.props.lastMessageFrom === messageFroms.USER
    ) {
      this.handleBotResponse();
    }
  }

  handleInitialBotMessages = () => {
    this.props.sendMessage({
      messageAt: Date.now(),
      messageFrom: messageFroms.BOT,
      messageText: 'Hello, I am a bot :)'
    });

    this.props.sendMessage({
      messageAt: Date.now() + 1,
      messageFrom: messageFroms.BOT,
      messageText:
        this.props.mode === chatModes.BOT_SUPPORT
          ? botSupportChat[INITIAL_BOT_ID].messageText
          : liveSupportChat[INITIAL_LIVE_ID].messageText,
      botMessageId:
        this.props.mode === chatModes.BOT_SUPPORT
          ? INITIAL_BOT_ID
          : INITIAL_LIVE_ID
    });
  };

  handleBotResponse = () => {
    const nextMessage = this.getNextMessageFromConstants();

    if (nextMessage) {
      this.props.sendMessage({
        messageAt: Date.now(),
        messageFrom: messageFroms.BOT,
        messageText:
          this.props.mode === chatModes.BOT_SUPPORT
            ? 'SUPPORT'
            : nextMessage.messageText,
        botMessageId: nextMessage.messageId
      });
    } else {
      this.setState({ isTypeDisabled: true });
    }
  };

  getNextMessageFromConstants = () => {
    const { lastBotMessageId } = this.props;

    if (lastBotMessageId !== null) {
      const nextMessageId = liveSupportChat[lastBotMessageId].nextMessageId;

      if (nextMessageId > -1) {
        return liveSupportChat[nextMessageId];
      }

      return null;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ChatArea />
        <TypeArea disabled={this.state.isTypeDisabled} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.chat.mode,
  lastMessageFrom: state.chat.lastMessageFrom,
  lastBotMessageId: state.chat.lastBotMessageId,
  chatLog: state.chat.chatLog
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendMessage
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Chat);
