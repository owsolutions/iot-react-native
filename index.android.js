import React, { Component } from 'react';
import { RoomAccessoriesComponent } from './components/RoomAccessoriesComponent/RoomAccessoriesComponent';
import { PlacesComponent } from './components/PlacesComponent/PlacesComponent';
import { RoomsComponent } from './components/RoomsComponent/RoomsComponent';
import { TemperatureAdjustComponent } from './components/TemperatureAdjust/TemperatureAdjust'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

 
export default class smarthomeapp extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <RoomsComponent />
        <RoomAccessoriesComponent />
        <TemperatureAdjustComponent />
      </View>
    );
  }
}

const App = StackNavigator({
   home: {
     screen: smarthomeapp
   },
   Places: {
     screen: PlacesComponent
   }
});


AppRegistry.registerComponent('smarthomeapp', () => App);
