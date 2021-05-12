import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <img src={props.avatar} alt="avatar" className={classes.avatar} />
            <div className={classes.name}>
                {props.name} 
            </div>
        </div>
    );
}
export default Friend;