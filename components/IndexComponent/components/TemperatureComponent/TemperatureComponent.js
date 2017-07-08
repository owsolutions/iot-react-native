import React, { Component } from 'react';
import {ScrollView, View, Text, Slider} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';
import style from './TemperatureComponentStyle';

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
          onValueChange={(value) => {
            updateValue(accessory, value)
          }} />
      </View>
    );
}