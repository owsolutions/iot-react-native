import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import { RoomBox } from './RoomBox';
import { connect } from 'react-redux';
import { store } from '../../../store';
 
class RoomsComponent extends Component {



    activateRoom (place) {
        store.dispatch({type: 'ACTIVATE_PLACE' , place});
    }
    render () {

        let styles = {
            container: {
                flexDirection: 'row',
                paddingBottom: 10
            }
        }
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                {
                    this.props.places.map((place, index) => {
                        return (
                        <RoomBox onPress={() => this.activateRoom(place)} room={place} key={index} />
                        );
                    })
                }
            </ScrollView>
        );
    }
}

export default connect(
    state => ({
        places: state.places
    })
)(RoomsComponent);