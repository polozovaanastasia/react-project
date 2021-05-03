import './ProfilePosts.module.css';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePosts = () => {
    return (
        <div>
            <h2>My posts</h2>
            <textarea name="" id="" cols="100" rows="3">New post</textarea>
            <button>Add post</button>
            <ProfilePost message="Hi, how are you?" img="https://html5css.ru/w3images/avatar2.png" />
            <ProfilePost message="It's my first post" img="https://html5css.ru/w3images/avatar6.png" />
        </div>
    );
}
export default ProfilePosts;