import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import StoreContext from '../../StoreContext';
import Messages from "./Messages";

const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
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
        </StoreContext.Consumer>
    );
}
export default MessagesContainer;