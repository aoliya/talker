import React, {useState} from 'react';
import styles from './profileInfo.module.css'
// import {FaGithub, FaFacebook, FaInstagram} from 'react-icons/fa'
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, updateProfileInfo }) => {
    let [editMode, setEditMode] = useState(false);
    
    const onMainPhotoChange = (e) => {
       if(e.target.files.length) {
           savePhoto(e.target.files[0])
       }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.leftBox}>
                    <div className={styles.imageBox}>
                     <img className={styles.imageProfile} src={profile.photos.large || 'images/woman-icon.png'} alt="100x100" />
                    </div>
                    <div>
                        {isOwner && <input type={'file'} onChange={onMainPhotoChange} />}
                    </div>    
                    
                </div>
               
                
                <div className={styles.infoBox}>
                    <div className={styles.personalInfo}>
                        <h1 className={styles.cardTitle}> {profile.fullName}
                        </h1>
                        
                        <ProfileStatus 
                            status={status} 
                            updateStatus={updateStatus} />
                        
                        { editMode 
                            ? <ProfileDataForm profile={profile} 
                                updateProfileInfo={updateProfileInfo}
                                setEditMode={setEditMode}
                                /> 
                            : <ProfileData 
                                goToEditMode={() => { 
                                   setEditMode(true) 
                                }} 
                                profile={profile} 
                                isOwner={isOwner}
                                 
                            /> }
                    
                    </div>
                    
                
                    {/* <div className={styles.iconsBox}>
                        <div className="my-2">
                            <FaGithub size='2em' color='#1DA1F2' />
                        </div>
                        <div className="mb-2">
                            <FaFacebook size='2em' color="#4267B2"/>
                        </div>
                        <div>
                            <FaInstagram size='2em' color="#C13584" />
                        </div>
                    
                    </div> */}

                </div>
                
            </div>
            
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && 
                <div className={styles.editBox}>
                    <button onClick = {goToEditMode} className="btn btn-warning">
                    Edit Profile
                </button>
            </div>

            }
            
            <div>
                <b>Looking for a Job:</b> {profile.lookingForAJob ? 'Yes' : 'No'} 
            </div>
            {profile.lookingForAJob && 
                <div className='card-subtitle'>
                    <b>Job Title:</b> {profile.lookingForAJobDescription}
                </div>
            }
                        
            <div className={styles.aboutMe}>  
                <b>About Me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
                            
            </div>
        </div>

    )
}



export default ProfileInfo
