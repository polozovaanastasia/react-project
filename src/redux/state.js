let state = {
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
    },
    messagesPage: {
        users: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Vasia' },
            { id: 3, name: 'Katia' },
            { id: 4, name: 'Oleg' },
            { id: 5, name: 'Sveta' },
            { id: 6, name: 'Tom!' }
        ],
        dialogs: [
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
        ]
    },
}

export default state;