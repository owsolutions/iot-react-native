import React, { Component } from 'react';
import {ScrollView, View, Text, Switch, Image} from 'react-native';
import style from './SingleBridgeAdjustStyle';
export default class SingleBridgeAdjustComponent extends Component {

  constructor () {
    super();
    this.state = {
      bridge1: false
    };
  }

  onValueChange = (value, index) => this.setState({
    ['bridge' + index]: value
  });

  render () { 
    return (
      <View style={style.container}>
        <Text style={style.text}>{this.props.name}</Text>
        <View style={style.inner}>
          <View style={{flex:1, flexDirection:'row', paddingTop:20}}>
            <Text>{this.state.bridge1}</Text>
            <Image source={this.state.bridge1 ? require('./images/cooler-active.png') : require('./images/cooler-deactive.png')} />
          </View>
          <View style={{flex:1, paddingRight:30}}>
            <Switch style={style.switch} onValueChange={(value) => this.onValueChange(value, 1)} value={this.state.bridge1} />
          </View>
        </View>
      </View>
    )

  }
}