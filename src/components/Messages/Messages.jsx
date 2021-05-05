import classes from './Messages.module.css';
import Users from './Users/Users';
import Dialogs from './Dialogs/Dialogs';

const Messages = () => {
    return (
        <div className={classes.messages}>
           <Users />
           <Dialogs />
        </div>
    );
}
export default Messages;