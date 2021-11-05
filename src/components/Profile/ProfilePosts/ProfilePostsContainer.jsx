import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import ProfilePosts from "./ProfilePosts";

const ProfilePostsContainer = () => {
    return (
        <StoreContext.Consumer>
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
        </StoreContext.Consumer>
    );
}
export default ProfilePostsContainer;