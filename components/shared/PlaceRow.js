import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function PlaceRow () {

    let styles = StyleSheet.create({
        image: {
            width:100, 
            height:100
        },
        text: {
            
        },
        view: {
            flex: 1,
            flexDirection: 'row',
            padding:10
        }
    });
    return (
        <View style={styles.view}>
            <View style={{width: 120, height: 100 }}>
                <Image source={require('./images/conference.png')} style={styles.image} />
            </View>
            <View style={{width: 200, height: 50}}>
                <Text style={styles.text}>This is a place!</Text>
            </View>
        </View>
    );


} 