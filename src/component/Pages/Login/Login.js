import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import LoginForm from './LoginForm';
import Apps from '../../Shared/Apps';

const Login = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Login' />
            <LoginForm />
            <Apps />
        </>
    );
};

export default Login;