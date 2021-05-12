import classes from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={classes.dialog  + ' ' + classes[props.direction]}>
            <div className={classes.dialog_cloud}>
                <img src={props.avatar} alt="avatar" className={classes.avatar} />
                <span className={classes.dialog_text}> {props.message} </span>
            </div>
        </div>

    );
}
export default Dialog;