import React, { Component } from 'react';
import { PlacesComponent } from './components/shared/PlacesComponent';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class smarthomeapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlacesComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('smarthomeapp', () => smarthomeapp);
