const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => { //если state не передан то заменяем его значением по умолчанию
    switch (action.type) {
        case ADD_POST:
            let lastPost = state.posts[state.posts.length - 1];
            let newPost = {
                id: lastPost.id + 1,
                avatar: 'https://html5css.ru/w3images/avatar3.png',
                message: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost], // добавить в конец spread-оператора newPost = state.posts.push(newPost);
                newPostText: '',
            };

        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText,
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};
export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST, newText: text };
};

export default profileReducer;