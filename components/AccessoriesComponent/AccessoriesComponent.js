import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { merge } from 'lodash';

export class AccessoriesComponent extends Component {
  render () {

    let style = {
      container: {
        marginTop: 10,
        marginRight: 10,
        backgroundColor: 'rgb(34, 71, 198)',
        padding:5,
        width: 90,
        borderRadius: 10
      },
      name: {
        fontSize:20,
        textAlign: 'center',
        marginBottom:15,
        color: 'rgb(132,153,241)'
      },
      value: {
        color:'green',
        fontSize:11,
        textAlign:'right',      
      }
    };

    let styleActive = {
      container: {
        backgroundColor: 'white',
      },
      name: {
        fontWeight: 'bold',
        color: 'gray'
      }
    }
    if (this.props.isactive) {
      style = merge(style, styleActive);
    }
    
    return (
      <TouchableOpacity>
        <View  style={style.container}>
          <Text style={style.value}>{this.props.value}</Text>
          <Text style={style.name}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}