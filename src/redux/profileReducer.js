const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let lastPost = state.posts[state.posts.length - 1];
            let newPost = {
                id: lastPost.id + 1,
                avatar: 'https://html5css.ru/w3images/avatar3.png',
                message: state.newPostText,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;

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