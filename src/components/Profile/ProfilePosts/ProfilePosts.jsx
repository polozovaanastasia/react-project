import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost';
import classes from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
    let postsElements = props.posts.map(post => (<ProfilePost avatar={post.avatar} message={post.message} key={post.id} />));

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <textarea onChange={onPostChange} 
                value={props.newPostText}
                ref={newPostElement}
                cols="100"
                rows="3" />
            <button onClick={onAddPost}>Add post</button>
            {postsElements}
        </div>
    );
}
export default ProfilePosts;