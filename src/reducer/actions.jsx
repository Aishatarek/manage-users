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

export const fetchUsers = () => {
    return (dispatch) => {
        const storedUsers = JSON.parse(localStorage.getItem('users'));

        if (storedUsers) {
            dispatch({
                type: FETCH_USERS,
                payload: storedUsers,
            });
        } else {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => {
                    dispatch({
                        type: FETCH_USERS,
                        payload: data,
                    });
                    localStorage.setItem('users', JSON.stringify(data));
                })
                .catch((error) => {
                    console.error('Error fetching users:', error);
                });
        }
    };
};

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});