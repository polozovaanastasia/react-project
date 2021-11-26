const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => { // если state не передан то заменяем его значением по-умолчанию
    switch (action.type) {
        case TOGGLE_FOLLOW:
            let stateCopy = {
                ...state,
                // users: [...state.users] и users: state.users.map(user => user) делают одно и тоже
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                }),
            }
            return stateCopy;

        case SET_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const toggleFollowActionCreator = (userId) => {
    return { type: TOGGLE_FOLLOW, userId: userId };
};

export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users: users };
};

export default usersReducer;