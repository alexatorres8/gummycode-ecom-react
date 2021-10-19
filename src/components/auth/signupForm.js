import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here.',
                onClick: () => history.push('/signup')
            },

            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email')
            },

            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password')
            }
        ]

        return (
            <form onSubmit={handleSubmit} className={`${className} signup-form`}>
                <Field className="signup-form__name"
                type="name"
                title="Name"
                placeholder="Name"
                name="name"
                component={FormInput} />

                <Field className="signup-form__email"
                type="email"
                title="Email"
                placeholder="Email"
                name="email"
                component={FormInput} />

                <Field className="signup-form__password"
                type="password"
                title="Password"
                placeholder="Password"
                name="password"
                component={FormInput} />

                <Field className="signup-form__confirm"
                type="password"
                title="Confirm Password"
                placeholder="Confirm Password"
                name="confirm"
                component={FormInput} />


                <div className='signup-form__line'></div>

                <Field className="signup-form__back"
                onClick={() => console.log('try to go back')}
                type="button"
                title="Back"
                name="back"
                short={true}
                component={FormButton} />

                <Field className="signup-form__login"
                onClick={() => console.log('try to submit')}
                type="submit"
                title="Login"
                name="login"
                component={FormButton} />

                <Details className='signup-form__details' title='QuickLinks' links={links} />
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;