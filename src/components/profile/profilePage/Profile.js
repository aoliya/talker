import React from 'react';
import MyPostsContainer from '../myPosts/MyPostsContainer'
import ProfileInfo from '../profileInfo/ProfileInfo';


const Profile = (props) => {
    if(!props.profile){
       return 'loading...'

    }
    return (
        <div>
            <ProfileInfo profile={props.profile} 
                         status={props.status} 
                         updateStatus={props.updateStatus} 
                         isOwner={props.isOwner} 
                         savePhoto={props.savePhoto}
                         updateProfileInfo={props.updateProfileInfo}
                         />
            <MyPostsContainer />
        </div>
    )
}

export default Profile
