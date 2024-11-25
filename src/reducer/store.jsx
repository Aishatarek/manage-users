import { createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReducer, favoritesReducer } from './reducer'; 
import { thunk } from 'redux-thunk';  

const rootReducer = combineReducers({
    favorites: favoritesReducer, 
    users: usersReducer,       
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
