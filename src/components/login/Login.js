import React from 'react';
import "./login-styles.css";
import {connect} from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/reducers/auth-reducer';
import  { Redirect } from 'react-router-dom'
import {MyTextInput, MyCheckbox} from '../../form-utils/form-fields'



const Login = (props) => {
  if(props.isAuth){
    return <Redirect to={'/profile'} />
  }

    return (
        <div>
            <h1>Login</h1>
            <Formik 
                initialValues= { {
                    email: "", 
                    password: "", 
                    rememberMe: false, 
                }}
                validationSchema = {Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string().min(6, 'Password should be longer than 6 characters').max(30, 'Password is to long').required(),
                    rememberMe: Yup.boolean()
                })}
                onSubmit = {(values) => {
                  console.log(values.email)
                    props.login(values.email, values.password, values.rememberMe)
                  }}
            >
                <Form>
                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />
                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="******"
                    />
                    <MyCheckbox className="mt-3" name="rememberMe">
                          remember me
                    </MyCheckbox>
                    <div>
                        <button className="btn btn-success my-3" type="submit">Login</button>
                    </div>
                        
                </Form>
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
