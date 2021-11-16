import React from 'react';
import classes from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={classes.messages_items}>
            {props.messages}
        </div>
    );
}
export default Messages;