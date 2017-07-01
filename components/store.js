import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
function placesReducer (places = [] , action) {
    switch (action.type) {
    case 'UPDATE_PLACE':
        places = places.concat(action.place);
    }
    return places;
    
}

const reducers = combineReducers({
  places: placesReducer
});
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);
