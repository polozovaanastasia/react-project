import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

const Profile = () => {
    return (
        <div className={classes.wrapper}>
            <ProfileInfo />
            <ProfilePostsContainer />
        </div>
    );
}
export default Profile;