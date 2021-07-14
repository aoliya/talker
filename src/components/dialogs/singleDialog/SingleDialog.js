import React from 'react'
import s from './singleDialog.module.css';
import {NavLink} from 'react-router-dom';

const SingleDialog = (props) => {
    return (
        <div>
            <div className={s.dialog}>
              <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default SingleDialog
