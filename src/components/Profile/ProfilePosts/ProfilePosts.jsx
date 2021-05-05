import classes from './ProfilePosts.module.css';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePosts = () => {
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <textarea name="" id="" defaultValue="New post" cols="100" rows="3" ></textarea> 
            <button>Add post</button>
            <ProfilePost avatar="https://html5css.ru/w3images/avatar2.png" message="Hi, how are you?" />
            <ProfilePost  avatar="https://html5css.ru/w3images/avatar6.png" message="It's my first post" />
        </div>
    );
}
export default ProfilePosts;