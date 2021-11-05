import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import storeContext from '../../../storeContext';
import ProfilePosts from "./ProfilePosts";

const ProfilePostsContainer = () => {
    return (
        <storeContext.Consumer>
            {store => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let updateNewPost = (text) => {
                    store.dispatch(updateNewPostActionCreator(text));
                }
                return (
                    <ProfilePosts
                        posts={state.posts}
                        newPostText={state.newPostText}
                        addPost={addPost}
                        updateNewPost={updateNewPost} />
                );
            }}
        </storeContext.Consumer>
    );
}
export default ProfilePostsContainer;