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
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
            </div>
            </div>
        </main>
    );
}
export default Profile;