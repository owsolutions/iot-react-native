import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';
import { mockAccessories } from './RoomAccessoriesMock';

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

    let accessories = mockAccessories.map((x, index) => {
      return {
        ...x,
        key: index
      };
    })

    return (
      <View style={style.container}>
        <Text style={style.text}>Room Accessories</Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={style.accessories}>
          {
            accessories.map(x => <AccessoriesComponent value={x.value} name={x.name} isactive={x.isactive} />)
            
          }
          
        </ScrollView>
      </View>
    )

  }
}