import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { messageFroms } from '../../constants';

import TagFaces from '@material-ui/icons/TagFaces';
import WbCloudy from '@material-ui/icons/WbCloudy';
import RestaurantMenu from '@material-ui/icons/RestaurantMenu';
import Android from '@material-ui/icons/Android';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  rootBot: {
    flexDirection: 'row-reverse'
  },
  avatar: {},
  text: {
    padding: '0 15px'
  }
};

const renderAvatar = (avatar, className) => {
  if (avatar === 'face') {
    return <TagFaces className={className} />;
  } else if (avatar === 'cloud') {
    return <WbCloudy className={className} />;
  } else if (avatar === 'menu') {
    return <RestaurantMenu className={className} />;
  }
};

const ChatLine = props => (
  <div
    className={`${props.classes.root} ${
      props.message.messageFrom === messageFroms.BOT
        ? props.classes.rootBot
        : null
    }`}
  >
    {props.message.messageFrom === messageFroms.USER ? (
      renderAvatar(props.avatar, props.classes.avatar)
    ) : (
      <Android />
    )}
    <pre className={props.classes.text}>{props.message.messageText}</pre>
  </div>
);

ChatLine.propTypes = {
  message: PropTypes.shape({
    messageAt: PropTypes.number.isRequired,
    messageFrom: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(ChatLine);
