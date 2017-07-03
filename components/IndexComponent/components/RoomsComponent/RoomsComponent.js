import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import { RoomBox } from './RoomBox';
import { connect } from 'react-redux';
 


class RoomsComponent extends Component {

    constructor () {
        super();
        
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
                            <RoomBox room={place} key={index} />
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