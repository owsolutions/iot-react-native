import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { PlaceRow } from './PlaceRow';

export class PlacesComponent extends Component {
    render () {
        return (
            <View>
                <PlaceRow />
            </View>
        )
    }
}