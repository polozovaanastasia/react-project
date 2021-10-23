import React from 'react';
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/state';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text))
    };

    let addPost = () => {
        props.dispatch(addNewMessageActionCreator())
    };
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {props.dialogs}
            </div>
            <div className={classes.dialogs_new_items}>
                <textarea onChange={onNewMessageChange} ref={newMessageElement} value={props.newMessageText} cols="100" rows="3"></textarea>
                <button onClick={addPost}>Send message</button>
            </div>
        </div>
    );
}
export default Dialogs;