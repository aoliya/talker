import React from 'react';
import {Formik, Form, Field} from 'formik';


const UserSearchForm = () =>{
    return(
        <div>
            <Formik
                initialValues={{ term: ''}}
                validate={values => {
                const errors = {};
                // if (!values.email) {
                // errors.email = 'Required';
                // } else if (
                // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                // errors.email = 'Invalid email address';
                // }
                return errors;
            }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
                {({ isSubmitting }) => (
                <Form>
                <Field type="text" name="term" />
                <button type="submit" disabled={isSubmitting}>
                    Search
                </button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default UserSearchForm