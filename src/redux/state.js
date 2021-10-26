import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    avatar: 'https://html5css.ru/w3images/avatar2.png',
                    message: 'Hi, how are you?',
                },
                {
                    id: 2,
                    avatar: 'https://html5css.ru/w3images/avatar6.png',
                    message: 'It\'s my first post!',
                }
            ],
            newPostText: 'Enter your text',
        },
        messagesPage: {
            users: [
                { id: 1, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Dima' },
                { id: 2, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Vasia' },
                { id: 3, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Katia' },
                { id: 4, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Oleg' },
                { id: 5, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Sveta' },
                { id: 6, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Tom!' }
            ],
            dialogs: [
                {
                    id: 1,
                    avatar: 'https://html5css.ru/w3images/avatar2.png',
                    message: 'Hi, how are you?',
                    direction: 'left',
                },
                {
                    id: 2,
                    avatar: 'https://html5css.ru/w3images/avatar6.png',
                    message: 'Not bad, thank you',
                    direction: 'right',
                },
                {
                    id: 3,
                    avatar: 'https://html5css.ru/w3images/avatar6.png',
                    message: 'It\'s my first post!',
                    direction: 'right',
                }
            ],
            newMessageText: 'Enter your message',
        },
        navbar: {
            friends: [
                { id: 1, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Dima' },
                { id: 2, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Vasia' },
                { id: 3, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Katia' },
            ]
        }
    },
    _callSubscriber() { //здесь лежит rerenderEntireTree из index.js
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) { //эта функция нам нужна, чтобы избежать циклической зависимости
        this._callSubscriber = observer; // observer - это паттерн
    },
    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;