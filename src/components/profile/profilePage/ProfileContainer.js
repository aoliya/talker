import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import {getUserProfile, getUserStatus, updateUserStatus, savePhoto, updateProfileInfo } from '../../../redux/reducers/profile-reducer';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    
    profileRefresh(){
        
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.loggedInUserId;
            if(!userId){
                this.props.history.push("/login");
            }
            
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    
    componentDidMount(){
        
        this.profileRefresh()
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.profileRefresh()
        }
        
    }


    render(){ 

        
        return (
            <div>
                <Profile {...this.props} 
                isOwner = {!this.props.match.params.userId}
                profile={this.props.profile} status={this.props.status} 
                updateStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                updateProfileInfo = {this.props.updateProfileInfo} />
            </div>
        )
    
    }
    
   
}



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loggedInUserId: state.auth.id,
  isAuth: state.auth.isAuth
  })


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, updateProfileInfo}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
