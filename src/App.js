import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import configureStore from './store';
import 'typeface-roboto';

import Welcome from './modules/welcome/Welcome';
import ModeSelector from './modules/welcome/mode-selector/ModeSelector';

const styles = {
  root: {
    width: 450,
    margin: 'auto',
    border: '1px solid #aaaaaa',
    borderRadius: 5
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Provider store={configureStore()}>
        <div className={classes.root}>
          <Welcome />
          <ModeSelector />
        </div>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
