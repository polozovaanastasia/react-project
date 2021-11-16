import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={classes.user}>
            <NavLink to={path} activeClassName={classes.active}> 
                <img src={props.avatar} alt="avatar" className={classes.avatar} />
                {props.name} 
            </NavLink>
        </div>

    );
}
export default DialogItem;