import classes from './DialogsItems.module.css';

const DialogsItems = (props) => {
    return (
        <div className={classes.dialogs_items}>
            {props.dialogs}
        </div>
    );
}
export default DialogsItems;