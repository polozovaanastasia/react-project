import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friendsElements = props.state.friends.map(friend => (<Friend avatar={friend.avatar} name={friend.name} id={friend.id} key={friend.id}/>));

    return (
        <div className={classes.wrapper}>
            <h3>
                Friends
            </h3>
            <div className={classes.items}>
                {friendsElements}
            </div>
        </div>
    );
}
export default Friends;