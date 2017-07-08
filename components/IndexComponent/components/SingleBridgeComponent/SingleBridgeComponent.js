import React, { Component } from 'react';
import {ScrollView, View, Text, Switch, Image} from 'react-native';
import style from './SingleBridgeComponentStyle';

export default function SingleBridgeComponent ({accessory, updateValue}) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{accessory.name}</Text>
      <View style={style.inner}>
        <View style={{flex:1, flexDirection:'row', paddingTop:20}}>
          <Text>{accessory.value}</Text>
          <Image source={accessory.value ? require('./images/lamp-active.png') : require('./images/lamp-deactive.png')} />
        </View>
        <View style={{flex:1, paddingRight:30}}>
          <Switch
            style={style.switch} 
            onValueChange={(value) => updateValue(accessory, value)} 
            value={accessory.value} />
        </View>
      </View>
    </View>
  )
}
