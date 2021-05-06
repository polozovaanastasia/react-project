import User from './User/User';
import classes from './Users.module.css';

const Users = (props) => {

    let usersData = [
        { id: 1, name: 'Dima'},
        { id: 2, name: 'Vasia'},
        { id: 3, name: 'Katia'},
        { id: 4, name: 'Oleg'},
        { id: 5, name: 'Sveta'},
        { id: 6, name: 'Tom!'}
    ]

    let usersElements = usersData.map( user => (<User name={user.name} id={user.id} />));

    return (
        <div className={classes.users}>
            <div className={classes.users_items}>
                { usersElements }
            </div>
        </div>
    );
}
export default Users;