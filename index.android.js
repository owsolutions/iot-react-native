import React, { Component } from 'react';
import { PlacesComponent } from './components/PlacesComponent/PlacesComponent';
import { IndexComponent } from './components/Index';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { store } from './components/store';

const App = StackNavigator({
   home: {
     screen: IndexComponent
   },
   Places: {
     screen: PlacesComponent
   }
});

AppRegistry.registerComponent('smarthomeapp', () => App);
