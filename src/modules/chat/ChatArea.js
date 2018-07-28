import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import ChatLine from './ChatLine';

const styles = {
  root: {
    padding: 10,
    height: 285,
    overflowY: 'scroll',
    border: '1px solid #AAAAAA'
  }
};

class ChatArea extends Component {
  componentDidUpdate() {
    const chatAreaDiv = document.getElementById('chat_area');
    chatAreaDiv.scrollTop = chatAreaDiv.scrollHeight;
  }

  render() {
    const { classes, chatLog, avatar } = this.props;

    return (
      <div className={classes.root} id="chat_area">
        {chatLog.map(message => (
          <ChatLine key={message.messageAt} message={message} avatar={avatar} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatLog: state.chat.chatLog,
  avatar: state.chat.avatar
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(ChatArea);
