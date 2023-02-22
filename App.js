/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import GalleryStack from './src/navigation/GalleryStack.js';
import LocationStack from './src/navigation/LocationStack.js';
const AppSwitchNavigator = createSwitchNavigator(
  {
    Gallery: {screen: GalleryStack},
    Location: {screen: LocationStack},
  },
  {
    initialRouteName: 'Gallery', // Telling the navigator that the first route is Splash screen
  },
);

const App = createAppContainer(AppSwitchNavigator);

const Navigator = () => {
  return (
    <>
      <App />
    </>
  );
};

export default Navigator;
