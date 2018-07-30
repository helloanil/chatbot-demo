import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { sendMessage } from '../../store/actions/ChatActions';
import { messageFroms, chatMessages, initialMessageIds } from '../../constants';

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
      prevProps.lastMessage.messageFrom !== messageFroms.USER &&
      this.props.lastMessage.messageFrom === messageFroms.USER
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

    const initalMessageId = initialMessageIds[this.props.mode];

    this.props.sendMessage({
      messageAt: Date.now() + 1,
      messageFrom: messageFroms.BOT,
      messageText: chatMessages[initalMessageId].messageText,
      botMessageId: initalMessageId
    });
  };

  handleBotResponse = () => {
    let nextMessage = null;
    const expectedResponses =
      chatMessages[this.props.lastBotMessageId].expectedResponses;

    if (
      expectedResponses.length > 0 &&
      !this.checkIfLastMessageWasExpectedResponse(expectedResponses)
    ) {
      nextMessage = {
        messageText: `I could not understand it. ${
          chatMessages[this.props.lastBotMessageId].messageText
        }`,
        messageId: this.props.lastBotMessageId
      };
    } else {
      nextMessage = this.getNextMessageFromConstants();
    }

    if (nextMessage) {
      this.props.sendMessage({
        messageAt: Date.now(),
        messageFrom: messageFroms.BOT,
        messageText: nextMessage.messageText,
        botMessageId: nextMessage.messageId
      });

      if (nextMessage.nextMessageId === -1) {
        this.setState({ isTypeDisabled: true });
      }
    }
  };

  checkIfLastMessageWasExpectedResponse = expectedResponses => {
    let isExpectedResponse = false;

    expectedResponses.forEach(response => {
      if (response.responseText === this.props.lastMessage.messageText) {
        isExpectedResponse = true;
      }
    });

    return isExpectedResponse;
  };

  getNextMessageFromConstants = () => {
    const { lastBotMessageId } = this.props;

    if (lastBotMessageId !== null) {
      let nextMessageId = -1;
      const expectedResponses =
        chatMessages[this.props.lastBotMessageId].expectedResponses;

      if (this.checkIfLastMessageWasExpectedResponse(expectedResponses)) {
        nextMessageId = this.getNextMessageOfExpectedResponse(
          expectedResponses
        );
      } else {
        nextMessageId = chatMessages[lastBotMessageId].nextMessageId;
      }

      if (nextMessageId > -1) {
        return chatMessages[nextMessageId];
      }

      return null;
    }
  };

  getNextMessageOfExpectedResponse = expectedResponses => {
    let nextMessageId = -1;

    expectedResponses.forEach(response => {
      if (response.responseText === this.props.lastMessage.messageText) {
        nextMessageId = response.nextMessageId;
      }
    });

    return nextMessageId;
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
  lastMessage: state.chat.lastMessage,
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
