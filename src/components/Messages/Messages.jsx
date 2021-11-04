import classes from './Messages.module.css';
import Users from './Users/Users';
import Dialogs from './Dialogs/Dialogs';

const Messages = (props) => {
    let onAddNewMessage = () => {
        props.addNewMessage();
    };
    let onNewMessageChange = (event) => {
        let text = event.target.value; //связываем так вместо использования ref
        props.updateNewMessage(text);
    };

    return (
        <div className={classes.messages}>
            <div className={classes.users}>
                <Users users={props.usersElements} />
            </div>
            <div className={classes.dialogs}>
                <Dialogs
                    dialogs={props.dialogsElements} />

                <div className={classes.dialogs_new}>
                    <textarea onChange={onNewMessageChange} value={props.newMessageText} cols="100" rows="3"></textarea>
                    <button onClick={onAddNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}
export default Messages;