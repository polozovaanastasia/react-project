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
            { id: 1, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Dima' },
            { id: 2, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Vasia' },
            { id: 3, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Katia' },
            { id: 4, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Oleg' },
            { id: 5, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Sveta' },
            { id: 6, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Tom!' }
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
                message: 'It\'s my first post!',
                direction: 'right',
            }
        ]
    },
}

export default state;