import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';
import { connect } from 'react-redux';
import { store } from '../../../store';
 
class RoomAccessoriesComponent extends Component {

  accessoryChange (accessory) {
    store.dispatch({type: 'ACTIVATE_ACCESSORY' , accessory})
  }
  accessories() {
    const { places, accessories } = this.props;
    const currentPlace = places.find(place => place.isactive);
    const mapCallback = (x, index) => (
      <AccessoriesComponent 
        key={index} 
        value={x.value} 
        name={x.name}
        onPress={() => this.accessoryChange(x)}
        isactive={x.isactive} />
    );

    return accessories
      .filter(x => x.place == currentPlace.key)
      .map(mapCallback);
  }
  render () {

    let styles = {
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
      <View style={styles.container}>
        <Text style={styles.text}>Room Accessories</Text>

        <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.accessories}>
          { this.accessories() }
        </ScrollView>

      </View>
    )
  }
}

export default connect(
    state => ({
        accessories: state.accessories,
        places: state.places
    })
)(RoomAccessoriesComponent);