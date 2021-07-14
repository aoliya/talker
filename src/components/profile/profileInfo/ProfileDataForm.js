import {MyTextInput, MyCheckbox, MyTextArea} from '../../../form-utils/form-fields';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './ProfileDataFormStyles.css'


const ProfileDataForm = ({profile, updateProfileInfo, setEditMode }) => {
    return(
        <div>
            <h2>Update Your Profile</h2>
            <Formik 
                initialValues= { {
                    fullName:profile.fullName,
                    lookingForAJob: false,
                    lookingForAJobDescription: profile.lookingForAJobDescription, 
                    aboutMe: profile.aboutMe,
                    contacts: {
                        facebook:profile.contacts['facebook'], 
                        website:profile.contacts['website'],
                        vk:profile.contacts['vk'],
                        twitter:profile.contacts['twitter'],
                        instagram:profile.contacts['instagram'],
                        youtube:profile.contacts['youtube'],
                        github:profile.contacts['github'],
                        mainLink:profile.contacts['mainLink'],
                    } 
                    
                }}
                validationSchema = {Yup.object({
                    fullName: Yup.string().max(15, 'Fullname is to long').required('Required'),
                    lookingForAJob: Yup.boolean(),
                    lookingForAJobDescription: Yup.string().max(40, "Must be 40 characters or less"),
                    aboutMe: Yup.string().max(300, "Must be 300 characters or less")  
                    
                })}
                onSubmit = {(values) => {
                    console.log(values)
                    updateProfileInfo(values);
                    setEditMode(false)
                  }
                }
            >
                
                <Form>
                <MyTextInput
                        label="Full Name:"
                        name="fullName"
                        type="text"
                        placeholder="Your Fullname is.."
                    />
                    <MyCheckbox className="mt-3"    name="lookingForAJob">
                        Looking for a job?
                    </MyCheckbox>
                    <MyTextArea
                        label="What kind of Job r you looking for?"
                        name="lookingForAJobDescription"
                        rows="3"
                        placeholder="Describe what r you looking for..."
                    />
                    <MyTextArea
                        label="Tell Us About Your Skills:"
                        name="aboutMe"
                        rows="6"
                        placeholder="About Me.."
                    />
                   

<b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <MyTextInput
                        key={key}
                        label={key}
                        name={`contacts.${key}`} 
                        type="text"
                        placeholder={key}
                    />
                })}
                
                    <div>
                        <button className="btn btn-success my-3" type="submit">Update</button>
                    </div>
                        
                </Form>
            </Formik>
        </div>
    )
    
}


export default ProfileDataForm