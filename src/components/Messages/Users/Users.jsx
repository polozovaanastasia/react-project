import User from './User/User';
import classes from './Users.module.css';

const Users = () => {
    return (
        <div className={classes.users}>
            <div className={classes.users_items}>
                <User name="Dima" user_id="1"></User>
                <User name="Vasia" user_id="2"></User>
                <User name="Katia" user_id="3"></User>
            </div>
        </div>
    );
}
export default Users;