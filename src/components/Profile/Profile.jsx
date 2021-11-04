import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePost from './ProfilePosts/ProfilePost/ProfilePost';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

const Profile = (props) => {
    let state = props.store.getState().profilePage;
    let postsElements = state.posts.map(post => (<ProfilePost avatar={post.avatar} message={post.message} key={post.id} />));
    
    return (
        <div>
            <ProfileInfo />
            <ProfilePostsContainer
                posts={postsElements}
                store={props.store} />
        </div>
    );
}
export default Profile;