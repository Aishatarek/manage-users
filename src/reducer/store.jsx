import { createStore, combineReducers } from 'redux';
import { usersReducer, favoritesReducer } from './reducer'; 

const rootReducer = combineReducers({
    favorites: favoritesReducer, 
    users: usersReducer,       
});

const store = createStore(rootReducer);

export default store;
