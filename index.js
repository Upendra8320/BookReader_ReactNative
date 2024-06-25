/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {ReaderProvider} from '@epubjs-react-native/core';
import App from './App';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <ReaderProvider>
      <App />
    </ReaderProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
