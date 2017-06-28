import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import theme from '../../themes/default';

export function PlaceRow (props = {}) {
    let place = props.place;

    let styles = StyleSheet.create({
        image: {
            width:90, 
            height:90,
            margin:5
        },
        placename: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.colors.default
        },
        view: {
            flex: 1,
            flexDirection: 'row',
            padding:10,
            borderBottomColor: 'silver',
            borderBottomWidth: 1
        }
    });
    return (
        <TouchableHighlight>
            <View style={styles.view}>
                <View style={{width: 120, height: 100 }}>
                    <Image source={place.image} style={styles.image} />
                </View>
                <View style={{width: 200, height: 50}}>
                    <Text style={styles.placename}>{place.name || 'Unknown place'}</Text>
                    <Text>Temperature: {place.temperature}</Text>
                    <Text>Lights: {place.outputs}</Text>
                    <Text>Active devices: {place.inputs}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );


} 