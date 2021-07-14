import {authAPI} from '../api/api'

//thunk for login
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.userLogin(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(authAPI.getMe())
            }
        })
}
