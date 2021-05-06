import classes from './ProfilePosts.module.css';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePosts = () => {

    let profilePostsData = [
        {
            id: 1,
            avatar: 'https://html5css.ru/w3images/avatar2.png',
            message: 'Hi, how are you?',
        },
        {
            id: 2,
            avatar: 'https://html5css.ru/w3images/avatar6.png',
            message: 'It\'s my first post!',
        }

    ]

    let profilePostsElements = profilePostsData.map( post => (<ProfilePost avatar={post.avatar} message={post.message} />));

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <textarea name="" id="" defaultValue="New post" cols="100" rows="3" ></textarea> 
            <button>Add post</button>
            { profilePostsElements }
        </div>
    );
}
export default ProfilePosts;