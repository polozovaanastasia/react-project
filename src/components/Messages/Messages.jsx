import classes from './Messages.module.css';

const Messages = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <div className={classes.users_items}>
                    <div className={classes.user + ' ' + classes.user_active}>
                        Name
                    </div>

                    <div className={classes.user}>
                        Name
                    </div>

                    <div className={classes.user}>
                        Name
                    </div>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.messages_items}>
                    <div className={classes.message}>
                        <img src="https://html5css.ru/w3images/avatar2.png" alt="avatar" className={classes.avatar} />
                        <span className={classes.message_text}>Hi, how are you?</span>
                    </div>
                </div>

                <div className={classes.messages_items}>
                    <div className={classes.message}>
                        <img src="https://html5css.ru/w3images/avatar2.png" alt="avatar" className={classes.avatar} />
                        <span className={classes.message_text}>Hi, how are you?</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Messages;