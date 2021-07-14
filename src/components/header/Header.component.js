import React from 'react';
import styles from './header.module.css';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
        <header className="header">
           <div className={styles.headerBox}>
              <div>Talker</div>
              {props.isAuth ? <div className={styles.loginName}>{props.login}
              <button onClick={props.logout} className="btn btn-success ms-4">Logout</button>
              
              </div> : (
                <div className={styles.loginBlock}>
                <NavLink to={'/login'}><button className="btn btn-light">Login</button></NavLink>
              </div>
              )}
              

           </div>
            
        </header>

  )
  
}

export default Header