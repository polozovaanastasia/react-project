import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <Dialog avatar="https://html5css.ru/w3images/avatar2.png" message="Hi, how are you?" />
                <Dialog avatar="https://html5css.ru/w3images/avatar6.png" message="It's my first post" />
            </div>

        </div>
    );
}
export default Dialogs;