import React from 'react';
import {connect} from 'react-redux';
import {followUsers, unFollowUsers,  setCurrentPage, toggleFollowingProgress, getUsers} from '../../redux/reducers/users-reducer';
import Users from './Users';
import {selectUsers, selectPageSize, selectTotalUsersCount,selectCurrentPage, selectIsFetching, selectPortionSize, selectFollowingInProgress} from '../../redux/selectors/users-selectors'



class UsersContainer extends React.Component {
  

  componentDidMount(){ 
      
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

  onPageChange = (pageNumber) => {
      
      this.props.getUsers(pageNumber, this.props.pageSize)
          
  }
      
  render(){ 

      return  <>
      {this.props.isFetching ? <img src={'images/spin.svg'} alt="" />  : null} 
          <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize} 
                  currentPage={this.props.currentPage} 
                  onPageChange ={this.onPageChange}
                  usersData = {this.props.usersData}
                  followUsers = {this.props.followUsers}
                  unFollowUsers = {this.props.unFollowUsers}
                  portionSize = {this.props.portionSize}
                  followingInProgress = {this.props.followingInProgress}
      
          /> 
       </>
  }

}

let mapStateToProps = (state) => {
   
    return {
      usersData: selectUsers(state),
      pageSize: selectPageSize(state),
      totalUsersCount: selectTotalUsersCount(state),
      currentPage: selectCurrentPage(state),
      isFetching: selectIsFetching(state),
      portionSize: selectPortionSize(state),
      followingInProgress: selectFollowingInProgress(state)
    }
  }


export default connect(mapStateToProps, {
    followUsers, unFollowUsers, setCurrentPage, getUsers, toggleFollowingProgress

  })(UsersContainer);

