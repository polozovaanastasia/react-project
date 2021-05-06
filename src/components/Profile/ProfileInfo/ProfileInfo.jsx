import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.info}>
            <div className={classes.img}>
                <img src="https://assets.about.me/background/users/t/a/l/talitabacetti_1400684030_05.jpg" alt="" />
            </div>
            <div className={classes.description}>
                <img className={classes.avatar} src="https://html5css.ru/w3css/img_avatar3.png" alt="" />
                <div>
                    User Name: Name
                    <br/>
                    Age: Age
                    <br/>
                    Country: Country
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;