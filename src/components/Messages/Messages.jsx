import classes from './Messages.module.css';
import Users from './Users/Users';
import User from './Users/User/User';
import Dialogs from './Dialogs/Dialogs';
import Dialog from './Dialogs/Dialog/Dialog';
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';

const Messages = (props) => {

    let usersElements = props.state.users.map(user => (<User avatar={user.avatar} name={user.name} id={user.id} key={user.id} />));
    let dialogsElements = props.state.dialogs.map(dialog => (<Dialog avatar={dialog.avatar} message={dialog.message} direction={dialog.direction} key={dialog.id} />));

    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageActionCreator(text))
    };

    let addPost = () => { //if(event.key === 'Enter' && !event.shiftKey)
        props.dispatch(addNewMessageActionCreator())
    };
    return (
        <div className={classes.messages}>
            <div className={classes.users}>
                <Users users={usersElements} />
            </div>
            <div className={classes.dialogs}>
                <Dialogs
                    dialogs={dialogsElements}
                    newMessageText={props.newMessageText}
                    dispatch={props.dispatch} />

                <div className={classes.dialogs_new}>
                    <textarea onChange={onNewMessageChange} value={props.newMessageText} cols="100" rows="3"></textarea>
                    <button onClick={addPost}>Send message</button>
                </div>
            </div>
        </div>
    );
}
export default Messages;