import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import { RoomBox } from './RoomBox';
import { connect } from 'react-redux';
import { store } from '../../../store';
import styles from './RoomsComponentStyle';
import {normalaizeValue} from '../../../../services/CommonFunctions';


class RoomsComponent extends Component {
    activateRoom (place) {
        store.dispatch({type: 'ACTIVATE_PLACE' , place});
        store.dispatch({type: 'RESET_ACCESSORY'});
    }

    previewRoomStatus (room, accessories) {
        return accessories.filter(x => x.place === room.key).map(x => `${x.name} is ${normalaizeValue(x.value)}`);
    }

    countAccessoriesInRoom (room, accessories) {
        return accessories.reduce((count, x) => x.place === room.key ? count + 1 : count, 0);
    }

    render () {
        const callee = (place, index) => <RoomBox onPress={() => this.activateRoom(place)} room={place} key={index} roomStatus={this.previewRoomStatus(place, this.props.accessories)} />;

        return (
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                style={styles.container}>
                { this.props.places.map(callee)}
            </ScrollView>
        );
    }
}

export default connect(
    state => ({
        places: state.places,
        accessories: state.accessories
    })
)(RoomsComponent);