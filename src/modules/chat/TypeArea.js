import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { sendMessage } from '../../store/actions/ChatActions';
import { messageFroms } from '../../constants';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Send from '@material-ui/icons/Send';

const styles = {
  root: {
    display: 'flex',
    padding: '20px 0'
  },
  textField: {
    width: '85%'
  },
  sendButton: {
    margin: 'auto'
  }
};

class TypeArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  onMessageEnter = ({ target: { value } }) => {
    this.setState({ message: value });
  };

  onSendMessage = () => {
    this.props.sendMessage({
      messageAt: Date.now(),
      messageFrom: messageFroms.USER,
      messageText: this.state.message
    });

    this.setState({ message: '' });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="type_area"
          className={classes.textField}
          value={this.state.message}
          onChange={this.onMessageEnter}
          placeholder="Please enter your message"
          disabled={this.props.disabled}
          multiline
        />
        <Button
          className={classes.sendButton}
          onClick={this.onSendMessage}
          variant="fab"
          color="primary"
          disabled={this.props.disabled}
          mini
        >
          <Send />
        </Button>
      </div>
    );
  }
}

TypeArea.defaultProps = {
  disabled: false
};

TypeArea.propTypes = {
  disabled: PropTypes.bool
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendMessage }, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(TypeArea);
