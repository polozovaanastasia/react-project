import classes from './Users.module.css';

const Users = (props) => {
    return (
        <div className={classes.users}>
            <div className={classes.users_items}>
                { props.usersElements }
            </div>
        </div>
    );
}
export default Users;