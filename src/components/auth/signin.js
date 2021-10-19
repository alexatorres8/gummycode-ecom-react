import React, { Component } from 'react';
import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="signin">
                <PageTitle className="signin__page-title" title="Login" />
                <SignInForm onSubmit={this.onSubmit} className="signin__form" />
            </div>
        )
    }
}

export default SignIn;