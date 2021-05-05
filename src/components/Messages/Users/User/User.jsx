import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={classes.user}>
            <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
        </div>

    );
}
export default User;