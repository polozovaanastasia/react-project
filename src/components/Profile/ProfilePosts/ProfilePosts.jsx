import './ProfilePosts.module.css';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePosts = () => {
    return (
        <div>
            <h2>My posts</h2>
            <textarea name="" id="" cols="100" rows="3">New post</textarea>
            <button>Add post</button>
            <ProfilePost />
        </div>
    );
}
export default ProfilePosts;