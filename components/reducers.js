import { combineReducers } from 'redux';
import { store } from './store';
import { mockRooms } from './mocks/RoomsMock';
import { mockAccessories } from './mocks/RoomAccessoriesMock';


export function placesReducer (places = [] , action) {
    switch (action.type) {
    case 'UPDATE_PLACE':
        places = places.concat(action.place);
    }
    return places;
}

export function accessoriesReducer (accessories = [], action) {
    switch (action.type) {
    case 'UPDATE_ACCESSORY':
        accessories = accessories.concat(action.accessory);
    }
    return accessories;
}

export const reducers = combineReducers({
  places: placesReducer,
  accessories: accessoriesReducer
});


function fetchRooms () {
    setTimeout(function () {
        mockRooms.map((room, index) => {
            store.dispatch({
                type: 'UPDATE_PLACE',
                place: Object.assign(room, {key: index})
            });
        });
    }, 10);
}

function fetchAccessories () {
    setTimeout(function () {
        
        mockAccessories.map((accessory, index) => {
            console.log('-> ' , accessory);
            store.dispatch({
                type: 'UPDATE_ACCESSORY',
                accessory
            });
        });
    }, 10);
}
