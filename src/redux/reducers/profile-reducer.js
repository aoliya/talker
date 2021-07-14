import {profileAPI} from '../../api/api'
import {ADD_POST,
        UPDATE_NEW_POST_TEXT,
        SET_USER_PROFILE,
        SET_USER_STATUS,
        UPDATE_PHOTO
        } 
        from '../../constants/profile.constants'


let initialState = {
    postsData: [
      {id:1, post: 'hi how r u', likesCount: 3},
      {id:2, post: 'i am ok', likesCount: 5},
      {id:3, post: 'heeey', likesCount: 12}
    ],
    newPostText: 'New Post', 
    profile: null,
    status: '' 
  }

const prfofileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
                }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
    }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
                }
            } 
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
                }
                } 
        case UPDATE_PHOTO: {
            return {
                 ...state,
                profile: {...state.profile, photos: action.photos}
                }
        }    
        default:
            return state;
    }
            
    }

export const addPostActionCreator = () => ({ type:ADD_POST });
   

export const updateNewPostTextActionCreator = (text) => (
    {   type:UPDATE_NEW_POST_TEXT,
        newText: text
    });
const setStatusActionCreator = (status) => (
    {   type:SET_USER_STATUS,
        status
    });
const setUserProfile = (profile) => (
    {   type: SET_USER_PROFILE,
        profile
    });
export const updatePhoto = (photos) => (
   { type: UPDATE_PHOTO, 
     photos
}
)
    
export const getUserProfile = (userId ) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
        

};
export const getUserStatus = (userId ) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusActionCreator(response.data))
       

};
export const updateUserStatus = (status ) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(setStatusActionCreator(status))
    }
};

export const savePhoto = ( file ) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if(response.data.resultCode === 0){
        dispatch(updatePhoto(response.data.data.photos))
    }
};

export const updateProfileInfo = ( profile ) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.updateProfile(profile)

    if(response.data.resultCode === 0){
       dispatch(getUserProfile(userId))

    }
};




export default prfofileReducer;