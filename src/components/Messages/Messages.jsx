import classes from './Messages.module.css';
import Users from './Users/Users';
import User from './Users/User/User';
import Dialogs from './Dialogs/Dialogs';
import Dialog from './Dialogs/Dialog/Dialog';

const Messages = (props) => {

    let usersElements = props.users.map(user => (<User name={user.name} id={user.id} key={user.id} />));;
    let dialogsElements = props.dialogs.map(dialog => (<Dialog avatar={dialog.avatar} message={dialog.message} key={dialog.id} />));

    return (
        <div className={classes.messages}>
            <Users users={usersElements} />
            <Dialogs dialogs={dialogsElements} />
        </div>
    );
}
export default Messages;