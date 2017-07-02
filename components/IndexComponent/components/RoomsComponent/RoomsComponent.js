import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import { store } from '../../../store';
import { RoomBox } from './RoomBox';

export class RoomsComponent extends Component {
    
    constructor () {
        super();
    }

    componentWillMount () {
        this.setState({
            places: []
        })
    }

    render () {
        store.subscribe(() => {
            this.setState({
                places: store.getState().places
            });
        });
        let styles = {
            container: {
                flexDirection: 'row',
                paddingBottom: 10
            }
        }
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                {
                    this.state.places.map((place, index) => {
                        return (
                            <RoomBox room={place} key={index} />
                        );
                    })
                }
            </ScrollView>
        );
    }
}