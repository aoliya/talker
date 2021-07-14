import {usersAPI} from '../../api/api'
import {FOLLOW_USER, 
        UNFOLLOW_USER, 
        SET_USER, 
        SET_CURRENT_PAGE,
        SET_TOTAL_USERS_COUNT,
        TOGLE_IS_FETCHING,
        TOGGLE_IS_FOLLOWING_PROGRESS  
        } from '../../constants/users.constants';


let initialState = {
    usersData: [],
    newPostText: 'New Post', 
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1, 
    isFetching: true,
    portionSize: 10,
    followingInProgress: []
  }


  export const updateObjInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(user => {
        if(user[objPropName] === itemId){
            return {...user, ...newObjProps}
        }
        return user

    })
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersData: updateObjInArray(state.usersData, action.userId, 'id', {followed: true})
                
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                usersData: updateObjInArray(state.usersData, action.userId, 'id', {followed: false})
            }
        case SET_USER:
            return {
                //first making copy of state, and adding new users came with action
                ...state,
                usersData: action.usersData
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.count
            }
        case TOGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.followingInProgress 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)
                }
      
        default:
            return state; 
              
    }
            
    }

export const follow = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW_USER, userId });
//users will come (from server) and we will set them
export const setUsers = (usersData) => ({ type: SET_USER, usersData });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const togleIsFetching = (isFetching) => ({type: TOGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: followingInProgress,
    userId: userId

})


//thunk creator
export const getUsers = (currentPage,pageSize) => {
//thunk
    return async (dispatch) => {
        dispatch(togleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
            
        let data = await usersAPI.getUsers(currentPage, pageSize)
            
        dispatch(togleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
        
    let data = await apiMethod(userId);
    if(data.resultCode === 0){
        dispatch(actionCreator(userId))
    }
        dispatch(toggleFollowingProgress(false, userId));
}


export const followUsers = (userId) => {
    //thunk
    return async (dispatch) => {
        let apiMethod = usersAPI.followUser.bind(userId);
        followUnfollowFlow(dispatch, userId, apiMethod, follow);
    }
} 


export const unFollowUsers = (userId) => {
    //thunk
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollowUser.bind(userId)
        followUnfollowFlow(dispatch, userId, apiMethod, unfollow);
        }
    } 


   
export default usersReducer;