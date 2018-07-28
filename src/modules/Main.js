import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Welcome from './welcome/Welcome';
import AvatarSelector from './welcome/avatar-selector/AvatarSelector';
import ModeSelector from './welcome/mode-selector/ModeSelector';
import Chat from './chat/Chat';

const styles = {
  root: {
    width: 450,
    margin: 'auto',
    border: '1px solid #aaaaaa',
    borderRadius: 5
  }
};

const Main = props => (
  <div className={props.classes.root}>
    <Welcome />
    {!props.avatar ? <AvatarSelector /> : null}
    {props.avatar && !props.mode ? <ModeSelector /> : null}
    {props.avatar && props.mode ? <Chat /> : null}
  </div>
);

const mapStateToProps = state => ({
  avatar: state.chat.avatar,
  mode: state.chat.mode
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Main);
