import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';
import style from './TemperatureComponentStyle';
import Slider from 'react-native-slider';

var customStyles2 = {
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#30a935',
    borderWidth: 2,
  }
} ;


export default function TemperatureAdjustComponent ({accessory, updateValue}) {
    return (
      <View style={style.container}>
        <Text style={style.text}>AC Bedroom</Text>
        <Text style={style.temperature}>
          {accessory.value}
        </Text>
        <Slider 
          minimumValue={10}
          step={0.5}
          value={accessory.value}
          maximumValue={60}
          trackStyle={customStyles2.track}
          thumbStyle={customStyles2.thumb}
          onValueChange={(value) => {
            updateValue(accessory, value)
          }} />
      </View>
    );
}