import React, { Component } from 'react';
import { PlacesComponent } from './components/shared/PlacesComponent';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


function Box (props) {
  let box = {
    backgroundColor: 'rgba(0,0,255,0.3)',
    flex: 1,
    margin:2.5,
    height:150,
    padding:10
  };

  let styles = {

    boxRight: {
      ...box,
      marginLeft:1.25
    },
    boxLeft: {
      ...box,
      marginRight: 1.25
    },
    text: {
      fontSize: 22,
      textAlign: 'center'
    }
  }
  return (
    <TouchableOpacity onPress={props.onPress} style={props.position && props.position === 'left' ? styles.boxLeft : styles.boxRight}>
      <View >
        <Text style={styles.text}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

let styles = {
  container: {
    flexDirection: 'row'
  }
} 
export default class smarthomeapp extends Component {

  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <Box position='left' title='Places' onPress={() => navigate('Places')} />
          <Box position='right' title='Rooms' />
        </View>
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
