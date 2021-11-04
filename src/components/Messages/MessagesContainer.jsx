import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let newMessageText = state.newMessageText;
    
    let addNewMessage = () => { //if(event.key === 'Enter' && !event.shiftKey)
        props.store.dispatch(addNewMessageActionCreator())
    };
    let updateNewMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    };

    return (
        <Messages 
        state={state} 
            newMessageText={newMessageText}
            addNewMessage={addNewMessage}
            updateNewMessage={updateNewMessage} />
    );
}
export default MessagesContainer;