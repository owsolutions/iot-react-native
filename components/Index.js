import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { RoomsComponent } from './RoomsComponent/RoomsComponent';
import { TemperatureAdjustComponent } from './TemperatureAdjust/TemperatureAdjust'
import { RoomAccessoriesComponent } from './RoomAccessoriesComponent/RoomAccessoriesComponent';

export class IndexComponent extends Component {

  render() {
    
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <RoomsComponent navigate={navigate} />
        <RoomAccessoriesComponent />
        <TemperatureAdjustComponent  />
      </ScrollView>
    );
  }
}
 