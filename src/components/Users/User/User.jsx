import classes from './User.module.css';

const User = (props) => {
    let onToggleFollow = (userId) => {
        props.toggleFollow(userId);
    }
    return (
        <div className={classes.user_wrapper}>
            <img src={props.avatar} alt="" className={classes.avatar} />
            <button onClick={() => onToggleFollow(props.id)}>
                {props.followed ? 'unfollow' : 'follow'}
            </button>
        </div>
    );
}
export default User;
