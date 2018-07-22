import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AvatarGrid from './AvatarGrid';

const styles = {
  root: {
    marginBottom: 30
  },
  selectAvatarHeadline: {
    fontSize: 22,
    fontWeight: 300,
    margin: '20px 0'
  }
};

const AvatarSelector = props => (
  <div className={props.classes.root}>
    <Typography
      className={props.classes.selectAvatarHeadline}
      variant="headline"
      align="center"
    >
      Please select your avatar
    </Typography>
    <div className={props.classes.selectAvatarSelection}>
      <Grid container>
        <AvatarGrid iconName="face" />
        <AvatarGrid iconName="cloud" />
        <AvatarGrid iconName="menu" />
      </Grid>
    </div>
  </div>
);

export default withStyles(styles)(AvatarSelector);
