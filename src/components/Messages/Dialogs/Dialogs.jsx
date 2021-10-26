import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs_items}>
            {props.dialogs}
        </div>
    );
}
export default Dialogs;