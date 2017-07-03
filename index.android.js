import React, { Component } from 'react';
import { PlacesComponent } from './components/PlacesComponent/PlacesComponent';
import { IndexComponent } from './components/IndexComponent/IndexComponent';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { store } from './components/store';

const App = TabNavigator({
   home: {
     screen: IndexComponent
   },
   Places: {
     screen: PlacesComponent
   }
});

export default PlacesComponent;

AppRegistry.registerComponent('smarthomeapp', () => App);
