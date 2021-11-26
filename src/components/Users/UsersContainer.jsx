import { connect } from 'react-redux';
import { toggleFollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowActionCreator(userId));
            // мы диспачим не action creator, а результат его работы т.е. сам action - { type: TOGGLE_FOLLOW, userId: userId };
        },
        setUsers: (users) => {
            // debugger
            dispatch(setUsersActionCreator(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;