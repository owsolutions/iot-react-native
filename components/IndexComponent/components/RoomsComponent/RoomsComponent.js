import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import { RoomBox } from './RoomBox';
import * as mock from '../../../mocks/RoomsMock';

export class RoomsComponent extends Component {
    render () {
        let places = mock.mockRooms;
        let styles = {
            container: {
                flexDirection: 'row',
                paddingBottom: 10
            }
        }
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                {
                    places.map((place, index) => {
                        return (
                            <RoomBox room={place} key={index} />
                        );
                    })
                }
            </ScrollView>
        );
    }
}