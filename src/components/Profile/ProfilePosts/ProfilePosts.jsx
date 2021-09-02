import React from 'react';
import classes from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = '';
    };

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <textarea name="" ref={newPostElement} cols="100" rows="3" ></textarea>
            <button onClick={addPost}>Add post</button>
            {props.posts}
        </div>
    );
}
export default ProfilePosts;