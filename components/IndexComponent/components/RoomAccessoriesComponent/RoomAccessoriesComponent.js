import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { AccessoriesComponent } from '../AccessoriesComponent/AccessoriesComponent';
import { connect } from 'react-redux';
import { store } from '../../../store';
import styles from './RoomAccessoriesComponentStyle';
import EmptyComponent from '../EmptyComponent/EmptyComponent';

class RoomAccessoriesComponent extends Component {

  accessoryChange (accessory) {
    store.dispatch({type: 'ACTIVATE_ACCESSORY' , accessory})
  }

  accessories () {
    const { places } = this.props;
    const currentPlace = places.find(place => place.isactive);
    return this.props.accessories
      .filter(x => x.place == currentPlace.key);
  }

  accessoriesElements () {
    const { accessories } = this.props;
    const mapCallback = (x, index) => (
      <AccessoriesComponent 
        key={index} 
        value={x.value} 
        name={x.name}
        onPress={() => this.accessoryChange(x)}
        isactive={x.isactive} />
    );
    return this.accessories().map(mapCallback);
  }
  render () {

    const accessoriesView = (
      <View>
        <Text style={styles.text}>Room Accessories</Text>
          <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.accessories}>
          {this.accessoriesElements()}
        </ScrollView>
      </View>
    );

    return (
      <View style={styles.container}>
        { this.accessories().length === 0 ? <EmptyComponent /> : accessoriesView}
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