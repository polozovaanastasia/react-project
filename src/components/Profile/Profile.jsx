import ProfilePosts from './ProfilePosts/ProfilePosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <main className={classes.content}>
            <div className={classes.img}>
                <img src="https://assets.about.me/background/users/t/a/l/talitabacetti_1400684030_05.jpg" alt="" />
            </div>
            <div>
                <img className={classes.avatar} src="https://html5css.ru/w3css/img_avatar3.png" alt="" />
                <div className={classes.info}></div>
            </div>
            <ProfilePosts />
        </main>
    );
}
export default Profile;