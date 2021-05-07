import classes from './ProfilePosts.module.css';
const ProfilePosts = (props) => {

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <textarea name="" id="" defaultValue="New post" cols="100" rows="3" ></textarea> 
            <button>Add post</button>
            { props.profilePostsElements }
        </div>
    );
}
export default ProfilePosts;