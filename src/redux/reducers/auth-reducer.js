import {authAPI} from '../../api/api'
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
  }

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            
            return {
                ...state,
                ...action.data,
            }
    }
        
        default:
            return state;
    }
            
    }

export const setAuthUserData = (id, email, login, isAuth) => ({ type:SET_USER_DATA, data: {id, email, login, isAuth} });
 
export const getMe = () => async (dispatch) => {
 
    let response = await authAPI.getMe()
    if(response.data.resultCode === 0){
        let{id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
                  
              }
}

//thunk for login
export const login = (email, password, rememberMe) => async (dispatch) =>  {
    
    let response = await authAPI.userLogin(email, password, rememberMe)
        
    if(response.data.resultCode === 0){
        dispatch(getMe())
               
            }  
    }

//thunk for logout
export const logout = () => async (dispatch) => {
    let response = await authAPI.userLogout()
        
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;