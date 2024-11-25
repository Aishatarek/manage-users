import { ADD_FAVORITE, REMOVE_FAVORITE, FETCH_USERS, ADD_USER } from './actions';

const usersInitialState = {
    users: JSON.parse(localStorage.getItem('users')) || [],
};

const favoritesInitialState = JSON.parse(localStorage.getItem("favorites")) || [];

const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload, 
            };
        case ADD_USER:
            const updatedUsers = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return {
                ...state,
                users: updatedUsers,
            };
        default:
            return state;
    }
};
const favoritesReducer = (state = favoritesInitialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if (!state.find(user => user.id === action.payload.id)) {
                const updatedFavorites = [...state, action.payload];
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                return updatedFavorites;
            }
            return state;

        case REMOVE_FAVORITE:
            const filteredFavorites = state.filter(user => user.id !== action.payload);
            localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
            return filteredFavorites;

        default:
            return state;
    }
};

export { usersReducer, favoritesReducer };
