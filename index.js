import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './src/App';
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig';

const store = storeConfig();
const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
