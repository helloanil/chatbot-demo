import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import 'typeface-roboto';

import Main from './modules/Main';

const App = () => (
  <Provider store={configureStore()}>
    <Main />
  </Provider>
);

export default App;
