import React, { Component } from 'react';
import {Text, View, FlatList} from 'react-native';
import { PlaceRow } from './PlaceRow';
import { times, sample, random } from 'lodash';

export class PlacesComponent extends Component {

    places () {

        let getImage = () => {
            const list = [
                require('./images/conference.png'),
                require('./images/fireplace.png'),
                require('./images/living-room.png'),
                require('./images/kitchen.png'),
                require('./images/bathtub.png'),
            ];
            return sample(list);
        };
        let getName = () => sample([
            'conference room',
            'Dinning room',
            "Kidsroom",
            "Pantry",
            "Store room"
        ]);

        let place = () => ({
            name: getName(),
            image: getImage(),
            temperature: [
                (random(200 , 600) * 0.1).toPrecision(4)
            ],
            inputs: random(9),
            outputs: random(9)
        });
        

        return times(5, time => place()).map((x,index) => {x.key=index; return x;});
    }

    render () {
        let places = this.places();
         
        return (
            <View>
                <FlatList
                    data={places}
                    renderItem={({item}) => <PlaceRow place={item} />}
                />
            </View>
        )
    }
}