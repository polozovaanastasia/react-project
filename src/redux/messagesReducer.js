const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                avatar: 'https://html5css.ru/w3images/avatar3.png',
                message: state.newMessageText,
                direction: 'right',
            };
            state.dialogs.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export const updateNewMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE, newText: text };
};

export default messagesReducer;