import classes from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={classes.dialog  + ' ' + classes[props.direction]}>
            <img src={props.avatar} alt="avatar" className={classes.avatar} />
            <span className={classes.dialog_text}> {props.message} </span>
        </div>

    );
}
export default Dialog;