import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import { connect } from 'react-redux';
import { store } from '../../../store';
import styles from './ControlsComponentStyle';
import { TemperatureAdjustComponent } from '../TemperatureAdjust/TemperatureAdjust';
import DoubleBridgeAdjustComponent from '../DoubleBridgeAdjust/DoubleBridgeAdjust';
import SingleBridgeAdjustComponent from '../SingleBridgeAdjust/SingleBridgeAdjust';

class ControlsComponent extends Component {

  render () {
 

    const findActiveControl = () => this.props.accessories.find(x => x.isactive);

    const getControl = () => {
      const control = findActiveControl();
      if (!control) return null;
      switch (control.type.key) {
        case 'temperature':
          return <TemperatureAdjustComponent name={control.name} />
        case 'single':
          return <SingleBridgeAdjustComponent name={control.name} />
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