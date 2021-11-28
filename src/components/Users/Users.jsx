import * as axios from "axios";
import User from "./User/User";
import classes from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {// пока такой костыль, чтобы не происходило бесконечной перерисовки
        let promise = axios.get(`https://social-network.samuraijs.com/api/1.0/users`);
        promise.then(response => {
            props.setUsers(response.data.items);
        })
    }

    let usersElements = props.users.map(user => (<User
        id={user.id}
        key={user.id}
        fullName={user.name}
        avatar={user.photos.large}
        followed={user.followed}
        status={user.status}
        toggleFollow={props.toggleFollow}
    />));

    return (
        <div className={classes.wrapper}>
            {usersElements}
        </div>
    );
}
export default Users;