import React from 'react';
import Header from '../../Shared/Header';
import Banner from './Banner';
import Service from '../../Shared/Service';
import AboutUs from '../../Shared/AboutUs';
import Feature from '../../Shared/Feature';
import Counter from './Counter';
import Testimonial from './Testimonial';
import PricePlan from '../../Shared/PricePlan';
import LatestBlog from '../../Shared/LatestBlog';
import Apps from '../../Shared/Apps';

const HomeOne = () => {
    return (
        <div>
            <Header
                parentMenu='home'
                headerClass='sc-header-section'
            />
            <Banner />
            <Service />
            <AboutUs />
            <Feature />
            <Counter />
            <Testimonial />
            <PricePlan />
            <LatestBlog />
            <Apps />
        </div>
    );
};

export default HomeOne;