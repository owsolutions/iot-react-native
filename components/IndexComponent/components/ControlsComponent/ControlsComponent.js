import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { connect } from 'react-redux';
import { store } from '../../../store';
import styles from './ControlsComponentStyle';
import TemperatureComponent from '../TemperatureComponent/TemperatureComponent';
import SingleBridgeComponent from '../SingleBridgeComponent/SingleBridgeComponent';

class ControlsComponent extends Component {

  /**
   * Passing this function to each component, and they will call this function,
   * to update the store with new values.
   */
  updateValue (accessory, value) {
    accessory.value = value;
    store.dispatch({type: "UPDATE_ACCESSORY_VALUE" , accessory , value})
  }

  render () {

    const findActiveControl = () => this.props.accessories.find(x => x.isactive);
    const getControl = () => {
      const accessory = findActiveControl();
      if (!accessory) return null;

      switch (accessory.type.key) {
        case 'temperature':
          return <TemperatureComponent accessory={accessory} updateValue={this.updateValue} />
        case 'single':
          return <SingleBridgeComponent accessory={accessory} updateValue={this.updateValue} />
      }
    };
    
    return (
      <View style={styles.container}>
        {getControl()}
      </View>
    )
  }
}

export default connect(
    state => ({
        accessories: state.accessories
    })
)(ControlsComponent);