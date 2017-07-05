import React, { Component } from 'react';
import {ScrollView, View, Text, Switch} from 'react-native';
export default class DoubleBridgeAdjustComponent extends Component {

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
      },
      inner: {
        flexDirection: 'row',
      },
      switch: {
        marginBottom:30
      }
    };

    return (
      <View style={style.container}>
        <Text style={style.text}>Lamp 1</Text>
        <View style={style.inner}>
          <View style={{flex:1}}>
            <Text>LAMP</Text>
          </View>
          <View style={{flex:1, paddingRight:30}}>
            <Switch style={style.switch} />
            <Switch style={style.switch} />
          </View>
        </View>
      </View>
    )

  }
}