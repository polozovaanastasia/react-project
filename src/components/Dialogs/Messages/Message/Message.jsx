import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.message  + ' ' + classes[props.direction]}>
            <div className={classes.message_cloud}>
                <img src={props.avatar} alt="avatar" className={classes.avatar} />
                <span className={classes.message_text}> {props.message} </span>
            </div>
        </div>

    );
}
export default Message;