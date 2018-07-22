import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import configureStore from './store';
import 'typeface-roboto';

import Welcome from './modules/welcome/Welcome';

const styles = {
  root: {
    width: 450,
    margin: 'auto'
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Provider store={configureStore()}>
        <div className={classes.root}>
          <Welcome />
        </div>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
