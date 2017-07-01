import React, { Component } from 'react';
import {ScrollView, View, Text, Slider} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';

export class TemperatureAdjustComponent extends Component {

  constructor () {
    super();
    this.state = {
      temperature : 0
    };
  }

  render () {

    let style = {
      container: {
        marginTop:10,
        borderRadius:15,
        backgroundColor: 'white',
        margin: 5,
        padding: 15,
        marginBottom:10
      },
      text: {
        fontSize: 21
      },
      accessories: {
        flexDirection: 'row'
      },
      temperature: {
        fontSize:90,
        textAlign: 'center'
      }
    };

    return (
      <View style={style.container}>
        <Text style={style.text}>AC Bedroom</Text>
        <Text style={style.temperature}>
          {(this.state.temperature)}
        </Text>
        <Slider 
          minimumValue={10}
          step={0.5}
          maximumValue={60}
          onValueChange={(value) => {
          this.setState({temperature: (value)})
        }} />
      </View>
    )

  }
}