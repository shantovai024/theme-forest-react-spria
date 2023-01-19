import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import PricePlan from '../../Shared/PricePlan';
import PriceFaq from './PriceFaq';
import LatestBlog from '../../Shared/LatestBlog';
import Apps from '../../Shared/Apps';

const Price = () => {
    return (
        <>
            <Header
                parentMenu='pages'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Pricing Plan' />
            <PricePlan />
            <PriceFaq />
            <LatestBlog />
            <Apps />
        </>
    );
};

export default Price;