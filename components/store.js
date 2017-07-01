import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
function placesReducer (places = [] , action) {
    switch (action.type) {
    case 'UPDATE_PLACE':
        places = places.concat(action.place);
    }
    return places;
}

function accessoriesReducer (accessories = [], action) {
    switch (action.type) {
    case 'UPDATE_ACCESSORY':
        accessories = accessories.concat(action.accessory);
    }
    return accessories;
}

const reducers = combineReducers({
  places: placesReducer,
  accessories: accessoriesReducer
});
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);

import { mockRooms } from './RoomsComponent/RoomsMock';


function fetchRooms () {
    setTimeout(function () {
        mockRooms.map((room, index) => {
            store.dispatch({
                type: 'UPDATE_PLACE',
                place: Object.assign(room, {key: index})
            });
        });
    }, 1000);
}

fetchRooms();