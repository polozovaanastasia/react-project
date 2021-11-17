import classes from './User.module.css';

const User = (props) => {
    let onToggleFollow = (userId) => {
        props.toggleFollow(userId);
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper_avatar}>
                <img src={props.avatar} alt="" className={classes.avatar} />
                <button
                    className={classes.button_follow}
                    onClick={() => onToggleFollow(props.id)}>
                    { props.followed 
                        ? 'unfollow'
                        : 'follow' }
                </button>
            </div>
            <div className={classes.wrapper_info}>
                <div className={classes.wrapper_info_left}>
                    <div className={classes.name}>{ props.fullName }</div>
                    <div>{ props.status }</div>
                </div>
                <div className={classes.wrapper_info_right}>
                    <div>{ props.country + ', ' }</div>
                    <div>{ props.city }</div>
                </div>
            </div>

        </div>
    );
}
export default User;
