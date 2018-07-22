import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TagFaces from '@material-ui/icons/TagFaces';
import WbCloudy from '@material-ui/icons/WbCloudy';
import RestaurantMenu from '@material-ui/icons/RestaurantMenu';

import AvatarGrid from './AvatarGrid';

const styles = {
  root: {},
  gridItem: {},
  headline: {},
  selector: {}
};

const renderIcon = iconName => {
  if (iconName === 'face') {
    return <TagFaces />;
  } else if (iconName === 'cloud') {
    return <WbCloudy />;
  } else if (iconName === 'menu') {
    return <RestaurantMenu />;
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
        <AvatarGrid renderIcon={renderIcon('face')} />
        <AvatarGrid renderIcon={renderIcon('cloud')} />
        <AvatarGrid renderIcon={renderIcon('menu')} />
      </Grid>
    </div>
  </div>
);

export default withStyles(styles)(AvatarSelector);
