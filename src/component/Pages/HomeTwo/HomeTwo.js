import React from 'react';
import Header from '../../Shared/Header';
import Home2Banner from './HomeTwoBanner';
import Works from './Works';
import Feature from '../../Shared/Feature';
import Business from './Business';
import ClientTestimonial from './ClientTestimonial';
import Home2Price from './Home2Price';
import AboutUs from '../../Shared/AboutUs';
import Apps from '../../Shared/Apps';
import logo2 from '../../../assets/images/logo2.png'

const HomeTwo = () => {
    return (
        <>
            <Header
                parentMenu='home'
                headerNormalLogo={logo2}
                headerStickyLogo={logo2}
                headerClass='sc-header-section sc-header-section2'
                signUpBtn='secondary-btn'
            />
            <Home2Banner />
            <Works />
            <AboutUs />
            <Feature bgYellow={'yellow-bg'} />
            <Business />
            <ClientTestimonial />
            <Home2Price />
            <Apps />
        </>
    );
};

export default HomeTwo;