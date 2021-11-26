import User from "./User/User";
import classes from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) { // пока такой костыль, чтобы не происходило бесконечной перерисовки
        props.setUsers(
            [{
                id: 1,
                avatar: 'https://html5css.ru/w3images/avatar2.png',
                followed: true,
                fullName: 'Dima K.',
                status: 'Hi, how are you? Listen! Someone is knocking at the door. There are a lot of flowers on our balcony.',
                location: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            },
            {
                id: 2,
                avatar: 'https://html5css.ru/w3images/avatar6.png',
                followed: false,
                fullName: 'Sveta Popova',
                status: 'Hello! Penguins can’t fly. Elephants can cry and play.',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: 3,
                avatar: 'https://html5css.ru/w3images/avatar3.png',
                followed: false,
                fullName: 'Sasha Kovalev',
                status: 'Good evening ',
                location: {
                    country: 'Ukraine',
                    city: 'Kiev'
                }
            }]
        );
    }

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
        <div className={classes.wrapper}>
            {usersElements}
        </div>
    );
}
export default Users;