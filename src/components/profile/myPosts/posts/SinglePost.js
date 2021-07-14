import React from 'react'
import styles from './SinglePost.module.css'

const SinglePost = (props) => {
    return (
        <div>
            <div className={styles.item}>
                <div>
                  <img src='images/profile.jpg' alt='avatar'  />
                </div>
                <div>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default SinglePost
