import React from 'react';
import Header from '../../Shared/Header';
import Home3Banner from './Home3Banner';
import Home3Counter from './Home3Counter';
import Home3Services from './Home3Services';
import Home3Feature from './Home3Feature';
import Home3Feature2 from './Home3Feature2';
import Home3Works from './Home3Works';
import Home3Apps from './Home3Apps';
import logo3 from '../../../assets/images/logo3.png'

const HomeThree = () => {
    return (
        <>
            <Header
                parentMenu='home'
                headerNormalLogo={logo3}
                headerStickyLogo={logo3}
                headerClass='sc-header-section sc-header-section3'
                signUpBtn='third-transparent-btn'
            />
            <Home3Banner />
            <Home3Counter />
            <Home3Services />
            <Home3Feature />
            <Home3Feature2 />
            <Home3Works />
            <Home3Apps />
        </>
    );
};

export default HomeThree;