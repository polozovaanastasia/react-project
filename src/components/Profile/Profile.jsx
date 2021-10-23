import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfilePost from './ProfilePosts/ProfilePost/ProfilePost';

const Profile = (props) => {
    let postsElements = props.profilePage.posts.map(post => (<ProfilePost avatar={post.avatar} message={post.message} key={post.id} />));
    
    return (
        <div>
            <ProfileInfo />
            <ProfilePosts 
                posts={postsElements}
                newPostText={props.newPostText}
                dispatch={props.dispatch} />
        </div>
    );
}
export default Profile;