'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraComponent extends Component {

    constructor () {
        super();
        this.state = {
            text: 'capture',
            count: 0
        }
    }
    onBarCodeRead(e) {
        Alert.alert("Took!");
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    onBarCodeRead={(e) => Alert.alert(JSON.stringify(e))}
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
        />
            </View>
        );
  }

  takePicture() {
      const count = this.state.count;
      this.setState({
          count: 1 + this.state.count
      })
      if ( count == 5) {
          Alert.alert("Count is 5!");
      }
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
