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
            ]
        },
        navBar: {
            friends: [
                { id: 1, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Dima' },
                { id: 2, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Vasia' },
                { id: 3, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Katia' },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) { //эта функция нам нужна, чтобы избежать циклической зависимости
        this._callSubscriber = observer; // observer - это паттерн
    },
    addPost() {
        let lastPost = this._state.profilePage.posts[this._state.profilePage.posts.length - 1];
        let newPost = {
            id: lastPost.id + 1,
            avatar: 'https://html5css.ru/w3images/avatar3.png',
            message: this._state.profilePage.newPostText,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;