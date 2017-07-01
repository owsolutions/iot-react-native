import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';

export class RoomAccessoriesComponent extends Component {

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

        <ScrollView  horizontal={true} style={style.accessories}>
          <AccessoriesComponent value="On" name="AC" isactive={true} />
          <AccessoriesComponent value="Locked" name="Door"/>
          <AccessoriesComponent value="Off" name="Fan" />
          <AccessoriesComponent value="On" name="TV" />
          <AccessoriesComponent value="Off" name="Lights" />
        </ScrollView>
      </View>
    )

  }
}