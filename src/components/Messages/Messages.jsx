import classes from './Messages.module.css';
import Users from './Users/Users';
import User from './Users/User/User';
import Dialogs from './Dialogs/Dialogs';
import Dialog from './Dialogs/Dialog/Dialog';

const Messages = () => {
    let usersData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Vasia' },
        { id: 3, name: 'Katia' },
        { id: 4, name: 'Oleg' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Tom!' }
    ]
    let dialogsData = [
        {
            id: 1,
            avatar: 'https://html5css.ru/w3images/avatar2.png',
            message: 'Hi, how are you?',
        },
        {
            id: 2,
            avatar: 'https://html5css.ru/w3images/avatar6.png',
            message: 'It\'s my first post',
        }

    ]

    let usersElements = usersData.map(user => (<User name={user.name} id={user.id} />));
    let dialogsElements = dialogsData.map( dialog => (<Dialog avatar={dialog.avatar} message={dialog.message} />));

    return (
        <div className={classes.messages}>
            <Users usersElements={usersElements} />
            <Dialogs dialogsElements={dialogsElements} />
        </div>
    );
}
export default Messages;