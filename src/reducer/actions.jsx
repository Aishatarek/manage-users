export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (user) => ({
    type: ADD_FAVORITE,
    payload: user,
});

export const removeFavorite = (userId) => ({
    type: REMOVE_FAVORITE,
    payload: userId,
});

export const fetchUsers = (users) => ({
    type: FETCH_USERS,
    payload: users,
});

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});