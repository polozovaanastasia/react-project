import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import DialogItem from './DialogsItems/DialogItem/DialogItem';
import Messages from './Messages/Messages';
import Message from './Messages/Message/Message';

const Dialogs = (props) => {
    let dialogItemElements = props.state.dialogs.map(dialog => (<DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id} key={dialog.id} />));
    let messagesElements = props.state.messages.map(message => (<Message avatar={message.avatar} message={message.message} direction={message.direction} key={message.id} />));

    let onAddNewMessage = () => {
        props.addNewMessage();
    };
    let onNewMessageChange = (event) => {
        let text = event.target.value; //связываем так вместо использования ref
        props.updateNewMessage(text);
    };

    return (
        <div className={classes.wrapper}>
            <div>
                <DialogsItems dialogs={dialogItemElements} />
            </div>
            <div className={classes.messages}>
                <Messages
                    messages={messagesElements} />

                <div className={classes.messages_new}>
                    <textarea onChange={onNewMessageChange} value={props.newMessageText} cols="100" rows="3"></textarea>
                    <button onClick={onAddNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;