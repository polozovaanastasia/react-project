import classes from './DialogsItems.module.css';

const DialogsItems = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.dialogs}
        </div>
    );
}
export default DialogsItems;