import React, { Component } from 'react';
import { AccessoriesComponent } from './components/AccessoriesComponent/AccessoriesComponent';
import { PlacesComponent } from './components/PlacesComponent/PlacesComponent';
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
    backgroundColor: 'white',
    flex: 1,
    margin:5,
    height:150,
    padding:20,
    borderRadius: 20
  };

  let styles = {

    boxRight: {
      ...box,
      marginLeft: box.margin / 2
    },
    boxLeft: {
      ...box,
      marginRight: box.margin / 2
    },
    text: {
      color: 'rgb(74, 109,249)',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left'
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




class RoomAccessoriesComponent extends Component {

  render () {

    let style = {
      container: {
        borderRadius:15,
        backgroundColor: 'white',
        margin: 5,
        padding: 15,
        backgroundColor: 'rgb(39, 85, 249)'
      },
      text: {
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold'
      },
      accessories: {
        flexDirection: 'row'
      }

    };

    return (
      <View style={style.container}>
        <Text style={style.text}>Room Accessories</Text>

        <View style={style.accessories}>
          <AccessoriesComponent value="On" name="AC" isactive={true} />
          <AccessoriesComponent value="Locked" name="Door"/>
          <AccessoriesComponent value="Off" name="Fan" />
        </View>
      </View>
    )

  }
}



export default class smarthomeapp extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <Box position='left' title='Bedroom' onPress={() => navigate('Places')} />
          <Box position='right' title='Living Room' />
        </View>

        <RoomAccessoriesComponent>

        </RoomAccessoriesComponent>
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
