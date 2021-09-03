import rerenderEntireTree from "../render";

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
        newPostText: 'Enter text',
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
}

let addPost = () => {
    let lastPost = state.profilePage.posts[state.profilePage.posts.length - 1];
    let newPost = {
        id: lastPost.id + 1,
        avatar: 'https://html5css.ru/w3images/avatar3.png',
        message: state.profilePage.newPostText,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

let updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export { state, addPost, updateNewPost };