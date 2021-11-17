import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.wrapper}>
            <NavLink to="/profile">
                <img className={classes.logo} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
            </NavLink>
        </header>
    );
}
export default Header;