import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {props.dialogs}
            </div>

        </div>
    );
}
export default Dialogs;