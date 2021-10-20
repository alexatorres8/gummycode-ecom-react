import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton, LongGrayButton } from '../formFields';
import history from '../../history';

class AccountInfoForm extends Component {

    constructor() {
        super()

        this.state = {
            showPasswords: false
        }
    }

    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} account-info-form`}>
                <Field className="account-info-form__name"
                type="name"
                title="Name"
                placeholder="Name"
                name="name"
                component={FormInput} />

                <Field className="account-info-form__email"
                type="email"
                title="Email"
                placeholder="Email"
                name="email"
                component={FormInput} />

                <Field className="account-info-form__street-address"
                type="address"
                title="Street Address"
                placeholder="Street Address"
                name="address"
                component={FormInput} />

                <Field className="account-info-form__city"
                type="city"
                title="City"
                placeholder="City"
                name="city"
                component={FormInput} />

                <Field className="account-info-form__state"
                type="state"
                title="State"
                placeholder="State"
                name="state"
                component={FormInput} />

                <Field className="account-info-form__zipcode"
                type="zipcode"
                title="Zip Code"
                placeholder="Zip Code"
                name="zipcode"
                component={FormInput} />

                {
                    this.state.showPasswords ?
                        [
                            <Field key={0} className="account-info-form__current"
                            type="password"
                            title="Current Password"
                            placeholder="Current Password"
                            name="current"
                            component={FormInput}/>,

                            <Field key={1} className="account-info-form__new"
                            type="password"
                            title="New Password"
                            placeholder="New Password"
                            name="new"
                            component={FormInput}/>,

                            <Field key={2} className="account-info-form__confirm"
                            type="password"
                            title="Confirm Password"
                            placeholder="Confirm Password"
                            name="confirm"
                            component={FormInput}/>
                        ]

                    :
                        <Field className="account-info-form__change-password"
                        onClick={() => this.setState({ showPasswords: true })}
                        type="button"
                        labelTitle="Password"
                        title="Change Password"
                        name="change-password"
                        component={LongGrayButton}/>
                }
            </form>
        )
    }
}

AccountInfoForm = reduxForm({
    form: 'AccountInfoForm'
})(AccountInfoForm);

export default AccountInfoForm;