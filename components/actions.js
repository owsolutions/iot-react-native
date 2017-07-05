import { mockRooms } from './mocks/RoomsMock';
import { mockAccessories } from './mocks/RoomAccessoriesMock';
import { store } from './store';

export function getPlaces () {   
    mockRooms.map((room, index) => {
        store.dispatch({
            type: 'UPDATE_PLACE',
            place: Object.assign(room, {key: index})
        });
    });
}

export function fetchAccessories () {    
    mockAccessories.map((accessory, index) => {
        store.dispatch({
            type: 'UPDATE_ACCESSORY',
            accessory
        });
    });
}
