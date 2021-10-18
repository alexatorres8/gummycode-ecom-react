import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} signin-form`}>
                <Field className="signin-form__email"
                type="email"
                title="Email"
                placeholder="Email"
                name="email"
                component={FormInput} />

                <Field className="signin-form__password"
                type="password"
                title="Password"
                placeholder="Password"
                name="password"
                component={FormInput} />
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;