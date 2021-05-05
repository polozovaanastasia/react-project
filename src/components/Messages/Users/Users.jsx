import User from './User/User';
import classes from './Users.module.css';

const Users = () => {
    return (
        <div className={classes.users}>
            <div className={classes.users_items}>
                <User name="Dima" id="1"></User>
                <User name="Vasia" id="2"></User>
                <User name="Katia" id="3"></User>
                <User name="Oleg" id="4"></User>
                <User name="Sasha" id="5"></User>
                <User name="Sveta" id="6"></User>
            </div>
        </div>
    );
}
export default Users;