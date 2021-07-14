import React from 'react';
import styles from './users.module.css';
import {NavLink} from 'react-router-dom';


const User = ({user, followingInProgress, unFollowUsers, followUsers}) => {
    
    return (
        <div className={styles.userBox}>
            <div className="me-5">
                <div className="mb-3">
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.avatar} src={user.photos.small !== null ? user.photos.small : 'images/man-icon.png'} alt="" />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} 
                    onClick={() =>{
                        unFollowUsers(user.id) }} 
                    className={styles.followButton} >Unfollow</button> : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { 
                        followUsers(user.id) }} className={styles.followButton}>Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
            </div>
            
        </div>
    )
}



export default User
