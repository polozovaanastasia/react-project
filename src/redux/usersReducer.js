const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            avatar: 'https://html5css.ru/w3images/avatar2.png',
            followed: true,
            fullName: 'Dima K.',
            status: 'Hi, how are you? Listen! Someone is knocking at the door. There are a lot of flowers on our balcony.',
            location: {
                country: 'Russia',
                city: 'Moscow'
            }
        },
        {
            id: 2,
            avatar: 'https://html5css.ru/w3images/avatar6.png',
            followed: false,
            fullName: 'Sveta Popova',
            status: 'Hello! Penguins can’t fly. Elephants can cry and play.',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            id: 3,
            avatar: 'https://html5css.ru/w3images/avatar3.png',
            followed: false,
            fullName: 'Sasha Kovalev',
            status: 'Good evening ',
            location: {
                country: 'Ukraine',
                city: 'Kiev'
            }
        },
    ]
};

const usersReducer = (state = initialState, action) => { //если state не передан то заменяем его значением по умолчанию
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

        default:
            return state;
    }
}

export const toggleFollowActionCreator = (userId) => {
    return { type: TOGGLE_FOLLOW, userId: userId };
};

export default usersReducer;