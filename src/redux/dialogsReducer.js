const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Dima' },
        { id: 2, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Vasia' },
        { id: 3, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Katia' },
        { id: 4, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Oleg' },
        { id: 5, avatar: 'https://html5css.ru/w3images/avatar6.png', name: 'Sveta' },
        { id: 6, avatar: 'https://html5css.ru/w3images/avatar2.png', name: 'Tom!' }
    ],
    messages: [
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let lastMessage = state.messages[state.messages.length - 1];
            let newMessage = {
                id: lastMessage.id + 1,
                avatar: 'https://html5css.ru/w3images/avatar3.png',
                message: state.newMessageText,
                direction: 'right',
            };
            return {
                ...state,
                messages: [ ...state.messages, newMessage], // добавить в конец spread-оператора newMessage = state.dialogs.push(newMessage);
                newMessageText: '',
            };

        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newText,
            };

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

export default dialogsReducer;