import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import AvatarSelector from './avatar-selector/AvatarSelector';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  headline: {
    width: '100%',
    fontSize: 24,
    fontWeight: 500
  },
  selectAvatarRoot: {},
  selectAvatarHeadline: {
    width: '100%',
    fontSize: 18
  },
  selectAvatarSelection: {}
});

const Welcome = props => (
  <div className={props.classes.root}>
    <Typography
      className={props.classes.headline}
      variant="headline"
      align="center"
    >
      Welcome to Chatbot
    </Typography>
    <AvatarSelector />
  </div>
);

export default withStyles(styles)(Welcome);
