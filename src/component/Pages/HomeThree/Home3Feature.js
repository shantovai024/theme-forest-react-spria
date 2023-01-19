import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import featureImg3 from '../../../assets/images/feature/feature_img3.png'
import featureImg4 from '../../../assets/images/feature/feature_img4.png'

const Home3Feature = () => {
    return (
        <>
            <section className="sc-feature-section-area3 darker-bg sc-pb-65 sc-md-pb-10">
                <div className="container">
                    <div className="row align-items-center">
                        <Fade bottom>
                            <div className="col-lg-6">
                                <div className="sc-feature-item sc-pr-110 sc-md-pr-0 sc-sm-pr-0">
                                    <div className="sc-heading-area sc-mb-30">
                                        <span className="sc-sub-title green-color text-uppercase">Feature</span>
                                        <h2 className="heading-title sc-mb-20">Exchange Your Crypto Or Tokens In A Minutes</h2>
                                        <div className="description sc-mb-40">
                                            Cursus euismod quis viverra nibh. Eu facilisis sed odio morbi quis commodo. Cursus euismod quis viverra nibh. Bibendum arcu vitae elementum
                                            curabitur.
                                        </div>
                                        <div className="banner-btn-area">
                                            <Link className="third-btn" to="/price#"><span>Try It Now</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-lg-6">
                                <div className="feature-image-area shake-y">
                                    <img className="feature-img" src={featureImg3} alt="Feature" />
                                    <img className="feature-img_1 pulse" src={featureImg4} alt="Feature" />
                                    <div className="feature-circle-shape"></div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home3Feature;