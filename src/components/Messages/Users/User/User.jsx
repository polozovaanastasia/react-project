import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => {
    return (
        <div className={classes.user}>
            <NavLink to={"/messages/" + props.user_id} activeClassName={classes.active}> {props.name} </NavLink>
        </div>

    );
}
export default User;