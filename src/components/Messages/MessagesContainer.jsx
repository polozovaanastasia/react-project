import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import Messages from "./Messages";
import User from './Users/User/User';
import Dialog from './Dialogs/Dialog/Dialog';

const MessagesContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let newMessageText = state.newMessageText;
    
    let usersElements = state.users.map(user => (<User avatar={user.avatar} name={user.name} id={user.id} key={user.id} />));
    let dialogsElements = state.dialogs.map(dialog => (<Dialog avatar={dialog.avatar} message={dialog.message} direction={dialog.direction} key={dialog.id} />));
    
    let addNewMessage = () => { //if(event.key === 'Enter' && !event.shiftKey)
        props.store.dispatch(addNewMessageActionCreator())
    };
    let updateNewMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    };

    return (
        <Messages 
            usersElements={usersElements}
            dialogsElements={dialogsElements} 
            newMessageText={newMessageText}
            addNewMessage={addNewMessage}
            updateNewMessage={updateNewMessage} />
    );
}
export default MessagesContainer;