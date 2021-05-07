import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfilePost from './ProfilePosts/ProfilePost/ProfilePost';

const Profile = () => {

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

    let profilePostsElements = profilePostsData.map(post => (<ProfilePost avatar={post.avatar} message={post.message} />));
    return (
        <div>
            <ProfileInfo />
            <ProfilePosts profilePostsElements={profilePostsElements} />
        </div>
    );
}
export default Profile;