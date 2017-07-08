import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import RoomsComponent from './components/RoomsComponent/RoomsComponent';
import RoomAccessoriesComponent from './components/RoomAccessoriesComponent/RoomAccessoriesComponent';
import ControlsComponent from './components/ControlsComponent/ControlsComponent';

export class IndexComponent extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <RoomsComponent navigate={navigate} />
        <RoomAccessoriesComponent />
        <ControlsComponent />
      </ScrollView>
    );
  }
}
 