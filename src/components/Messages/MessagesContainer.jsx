import { connect } from 'react-redux';
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;