import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: 60,
    height: 60
  },
  icon: {
    fontSize: 48
  }
};

const AvatarGrid = props => (
  <Grid item xs={12} sm={4} className={props.classes.root}>
    <ButtonBase disableRipple disableTouchRipple>
      <Avatar className={props.classes.avatar}>{props.renderIcon}</Avatar>
    </ButtonBase>
  </Grid>
);

AvatarGrid.propTypes = {
  renderIcon: PropTypes.node.isRequired
};

export default withStyles(styles)(AvatarGrid);
