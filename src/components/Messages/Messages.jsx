import classes from './Messages.module.css';
import User from './Users/User/User';
import Dialog from './Dialogs/Dialog/Dialog';
import Users from './Users/Users';
import Dialogs from './Dialogs/Dialogs';

const Messages = (props) => {
    let usersElements = props.state.users.map(user => (<User avatar={user.avatar} name={user.name} id={user.id} key={user.id} />));
    let dialogsElements = props.state.dialogs.map(dialog => (<Dialog avatar={dialog.avatar} message={dialog.message} direction={dialog.direction} key={dialog.id} />));

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
                <Users users={usersElements} />
            </div>
            <div className={classes.dialogs}>
                <Dialogs
                    dialogs={dialogsElements} />

                <div className={classes.dialogs_new}>
                    <textarea onChange={onNewMessageChange} value={props.newMessageText} cols="100" rows="3"></textarea>
                    <button onClick={onAddNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}
export default Messages;