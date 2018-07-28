import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { setAvatar } from '../../../store/actions/ChatActions';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TagFaces from '@material-ui/icons/TagFaces';
import WbCloudy from '@material-ui/icons/WbCloudy';
import RestaurantMenu from '@material-ui/icons/RestaurantMenu';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    height: 64,
    width: 64
  },
  icon: {
    fontSize: 36
  }
};

class AvatarGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.iconName === nextProps.chatAvatar) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  }

  onAvatarClick = () => this.props.setAvatar(this.props.iconName);

  renderIcon = () => {
    const { iconName, classes } = this.props;

    if (iconName === 'face') {
      return <TagFaces className={classes.icon} />;
    } else if (iconName === 'cloud') {
      return <WbCloudy className={classes.icon} />;
    } else if (iconName === 'menu') {
      return <RestaurantMenu className={classes.icon} />;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} sm={4} className={classes.root}>
        <Button
          className={classes.button}
          onClick={this.onAvatarClick}
          variant="fab"
          color={this.state.isSelected ? 'secondary' : 'primary'}
          disableRipple
          disableTouchRipple
        >
          {this.renderIcon(this.props.name, this.props.classes)}
        </Button>
      </Grid>
    );
  }
}

AvatarGrid.propTypes = {
  iconName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chatAvatar: state.chat.avatar
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setAvatar
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(AvatarGrid);
