import { combineReducers } from 'redux';
import { store } from './store';
import { mockRooms } from './mocks/RoomsMock';
import { mockAccessories } from './mocks/RoomAccessoriesMock';

export function placesReducer (places = [] , action) {
    switch (action.type) {
    case 'UPDATE_PLACE':
        places = places.concat(action.place);
    case 'ACTIVATE_PLACE':
        places = places.map(place => {
            if (place.key === action.place.key) {
                place.isactive = true;
            } else {
                place.isactive = false;
            }
            return place;
        });
    }
    return places;
}

export function accessoriesReducer (accessories = [], action) {
    switch (action.type) {
    case 'UPDATE_ACCESSORY_VALUE':
        return accessories.map(x => { 
            if (x.key === action.accessory.key) {
                x.value = action.accessory.value;
            }
            return x;
        });
    break;
    case 'RESET_ACCESSORY':
        return accessories.map(x => {x.isactive = false; return x;});
    case 'UPDATE_ACCESSORY':
        accessories = accessories.concat(action.accessory);
    case 'ACTIVATE_ACCESSORY':
        accessories = accessories.map(x => {
            if (x.key === action.accessory.key) {
                x.isactive = true;
            } else {
                x.isactive = false;
            }
            return x;
        });

    }
    return accessories;
}

export const reducers = combineReducers({
  places: placesReducer,
  accessories: accessoriesReducer
});
