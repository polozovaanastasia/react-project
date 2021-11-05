import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
// import Friends from './Friends/Friends';

const Navbar = (props) => {
    // let state = props.store.getState().navbar;
    
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            {/* <Friends state={state}></Friends> */}
        </nav>
    );
}
export default Navbar;