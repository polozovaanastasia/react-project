import classes from './Messages.module.css';
import Users from './Users/Users';
import User from './Users/User/User';
import Dialogs from './Dialogs/Dialogs';
import Dialog from './Dialogs/Dialog/Dialog';

const Messages = (props) => {
    
    let usersElements = props.state.users.map(user => (<User avatar={user.avatar} name={user.name} id={user.id} key={user.id} />));
    let dialogsElements = props.state.dialogs.map(dialog => (<Dialog avatar={dialog.avatar} message={dialog.message} direction={dialog.direction} key={dialog.id} />));

    return (
        <div className={classes.messages}>
            <Users users={usersElements} />
            <Dialogs
                dialogs={dialogsElements}
                newMessageText={props.newMessageText}
                dispatch={props.dispatch} />
        </div>
    );
}
export default Messages;