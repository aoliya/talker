import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {
    
    const [isUpdate, setIsUpdate] = useState(false)
    const [status, setStatus] = useState(props.status)
    
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    
    const onClickUpdate = () => {
        setIsUpdate(true)
        
       }
    const onBlurChange = () => {
        setIsUpdate(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

             
        return(
            <div className="mb-3">
                {!isUpdate ? ( 
                <div>
                    <span onDoubleClick={onClickUpdate}>{props.status || 'NO status'}</span>
                </div>)
                : ( 
                    <div>
                        <input autoFocus={true} onChange={onStatusChange} onBlur={onBlurChange} type="text"  value={status} />
                    </div>
                )
               

               }
            </div>

        )
    
}

export default ProfileStatus