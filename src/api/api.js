import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": process.env.API_KEY
    } 
})

export const usersAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
            })
    },

    followUser(userId) {
        return  instance.post(`follow/${userId}`)
        .then(response => {
            return response.data})
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            
            return response.data})

 }
    
}

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`)
        
    },
    userLogin(email, password, rememberMe = false){
        return instance.post(`auth/login`, {
            email, password, rememberMe
        })
    },
    userLogout(){
        return instance.delete(`auth/login`)
    },

}


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
        
    },
    
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    
    updateStatus(newStatus){
        return instance.put(`profile/status`, {status:newStatus})
    },

    savePhoto(photoFile){
        const formdata = new FormData();
        formdata.append('image', photoFile)
        return instance.put(`profile/photo`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    updateProfile(profile){
        return instance.put(`profile`, profile)
    }


}




 

 