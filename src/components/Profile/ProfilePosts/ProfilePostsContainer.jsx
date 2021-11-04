import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import ProfilePosts from "./ProfilePosts";

const ProfilePostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let updateNewPost = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <ProfilePosts 
            posts={props.posts}
            newPostText={state.newPostText}
            addPost={addPost}
            updateNewPost={updateNewPost}/>
    );
}
export default ProfilePostsContainer;