import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { merge } from 'lodash';
import styles , {styleActive} from './AccessoriesComponentStyle';

export class AccessoriesComponent extends Component {

  normalaizeValue (value) {
    if (typeof value === 'boolean') {
      return value ? 'ON' : 'OFF';
    }
    return value;
  }

  render () {
    let style = this.props.isactive ? merge({}, styles, styleActive) : styles;
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={style.container}>
            <Text style={style.value}>{this.normalaizeValue(this.props.value)}</Text>
            <Text style={style.name}>{this.props.name}</Text>
          </View>
        </TouchableOpacity>
      );
    }
}