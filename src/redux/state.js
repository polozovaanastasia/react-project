const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

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
        navBar: {
            friends: [
                { id: 1, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Dima' },
                { id: 2, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Vasia' },
                { id: 3, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Katia' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) { //эта функция нам нужна, чтобы избежать циклической зависимости
        this._callSubscriber = observer; // observer - это паттерн
    },
    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let lastPost = this._state.profilePage.posts[this._state.profilePage.posts.length - 1];
            let newPost = {
                id: lastPost.id + 1,
                avatar: 'https://html5css.ru/w3images/avatar3.png',
                message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 1,
                avatar: 'https://html5css.ru/w3images/avatar3.png',
                message: this._state.messagesPage.newMessageText,
                direction: 'right',
            };
            this._state.messagesPage.dialogs.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};
export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST, newText: text };
};

export const addNewMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export const updateNewMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE, newText: text };
};

export default store;
window.store = store;