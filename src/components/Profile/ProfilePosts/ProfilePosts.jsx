import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state';
import classes from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <textarea onChange={onPostChange} 
                value={props.newPostText}
                ref={newPostElement}
                cols="100"
                rows="3" />
            <button onClick={addPost}>Add post</button>
            {props.posts}
        </div>
    );
}
export default ProfilePosts;