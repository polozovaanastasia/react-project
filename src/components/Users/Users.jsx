import User from "./User/User";
import classes from './Users.module.css';

const Users = (props) => {
    let usersElements = props.users.map(user => (<User
                                                    id={user.id}
                                                    key={user.id}
                                                    fullName={user.fullName}
                                                    avatar={user.avatar}
                                                    followed={user.followed}
                                                    status={user.status}
                                                    country={user.location.country}
                                                    city={user.location.city}
                                                    toggleFollow={props.toggleFollow}
                                                    />));

    return (
        <div className={classes.users}>
            {usersElements}
        </div>
    );
}
export default Users;