import classes from './ProfilePost.module.css';

const ProfilePost = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.img} alt="user_avatar" />
            <h3>{props.message}</h3>
        </div>
    );
}
export default ProfilePost;