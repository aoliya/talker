import React from 'react';
import Pagination from '../pagination/Pagination';
import UserSearchForm from './UsersSearchForm';
import User from './User';
// import styles from './users.module.css'

const Users = ({onPageChange, totalUsersCount, pageSize, portionSize, usersData, followUsers, unFollowUsers, followingInProgress }) => {
    
    return (
        <div>
            <UserSearchForm />
            <div className="d-flex justify-content-center">
               <Pagination onPageChange={onPageChange}   totalUsersCount={totalUsersCount} 
               pageSize={pageSize} 
               portionSize={portionSize} />
                               
            </div>
            <div className="mt-5">
                { usersData.map( user => <User 
                    user = {user} 
                    key={user.id} 
                    followingInProgress= {followingInProgress} 
                    unFollowUsers = {unFollowUsers} 
                    followUsers = {followUsers} /> )
                }
            </div>
            
            
        </div>
    )
}



export default Users
