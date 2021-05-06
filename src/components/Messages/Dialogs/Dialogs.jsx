import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {

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

    let dialogsElements = dialogsData.map( dialog => (<Dialog avatar={dialog.avatar} message={dialog.message} />));

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                { dialogsElements }
            </div>

        </div>
    );
}
export default Dialogs;