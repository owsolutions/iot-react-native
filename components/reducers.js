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
