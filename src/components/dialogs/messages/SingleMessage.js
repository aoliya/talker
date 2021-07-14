import React from 'react';
import s from "./singleMessage.module.css"

const SingleMessage = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message} </div>

        </div>
    )
}

export default SingleMessage
