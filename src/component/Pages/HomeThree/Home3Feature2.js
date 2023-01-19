import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import featureImg5 from '../../../assets/images/feature/feature_img5.png'
import featureImg6 from '../../../assets/images/feature/feature_img6.png'

const Home3Feature2 = () => {
    return (
        <>
            <section className="sc-feature-section-area4 darker-bg sc-pb-55 sc-md-pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <Fade left>
                            <div className="col-lg-6">
                                <div className="sc-feature-image shake-y">
                                    <img className="feature-image" src={featureImg5} alt="aboutImage" />
                                    <img className="feature-image_1 pulse" src={featureImg6} alt="About" />
                                    <div className="feature-circle-shape"></div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-lg-6">
                                <div className="sc-feature-item sc-pr-110 sc-md-pr-0 sc-sm-pr-0">
                                    <div className="sc-heading-area sc-mb-20">
                                        <span className="sc-sub-title primary-color text-uppercase">Feature</span>
                                        <h2 className="heading-title sc-mb-25">Tons Of Features Just In One Single Our App</h2>
                                        <div className="description sc-mb-25">Felis bibendum ut tristique et. Cras fermentum odio eu feugiat pretium. Nec tincidunt praesent feugiat.</div>
                                    </div>
                                    <div className="feature_check sc-mb-40">
                                        <ul>
                                            <li>
                                                <i className="ri-checkbox-circle-fill"></i>Widget personalize your own app
                                                <span>with your preference</span>
                                            </li>
                                            <li>
                                                <i className="ri-checkbox-circle-fill"></i>Auto up-to-date, we mark sure
                                                <span>that it keep updating</span>
                                            </li>
                                            <li>
                                                <i className="ri-checkbox-circle-fill"></i>100+ crypto Exchange platfrom
                                                <span>support</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="banner-btn-area">
                                        <Link className="third-btn" to="/price#"><span>Get Started</span></Link>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home3Feature2;