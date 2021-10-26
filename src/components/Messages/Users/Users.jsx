import classes from './Users.module.css';

const Users = (props) => {
    return (
        <div className={classes.users_items}>
            {props.users}
        </div>
    );
}
export default Users;