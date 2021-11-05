import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import storeContext from '../../storeContext';
import Messages from "./Messages";

const MessagesContainer = () => {
    return (
        <storeContext.Consumer>
            {store => {
                let state = store.getState().messagesPage;
                let newMessageText = state.newMessageText;
                
                let addNewMessage = () => { //if(event.key === 'Enter' && !event.shiftKey)
                    store.dispatch(addNewMessageActionCreator())
                };
                let updateNewMessage = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text))
                };
            
                return (
                    <Messages 
                        state={state} 
                        newMessageText={newMessageText}
                        addNewMessage={addNewMessage}
                        updateNewMessage={updateNewMessage} />
                );
            }}
        </storeContext.Consumer>
    );
}
export default MessagesContainer;