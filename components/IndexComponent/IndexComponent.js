import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { RoomsComponent } from './components/RoomsComponent/RoomsComponent';
import { TemperatureAdjustComponent } from './components/TemperatureAdjust/TemperatureAdjust'
import { RoomAccessoriesComponent } from './components/RoomAccessoriesComponent/RoomAccessoriesComponent';

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
 