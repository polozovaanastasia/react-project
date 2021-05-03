import classes from './ProfilePost.module.css';

const ProfilePost = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://html5css.ru/w3css/img_avatar3.png" alt="avatar" />
            <h3>{props.message}</h3>
        </div>
    );
}
export default ProfilePost;