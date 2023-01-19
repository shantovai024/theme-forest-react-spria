import React from 'react';
import { Fade } from 'react-reveal';
import appsImg from '../../../assets/images/feature/apps_img.png'

const Home3Apps = () => {
    return (
        <>
            <section className="sc-apps-section-area sc-apps-section-area4 darker-bg">
                <div className="container">
                    <div className="row">
                        <div className="apps-area d-flex align-items-center">
                            <Fade left>
                                <div className="col-lg-6">
                                    <div className="apps-title">
                                        <h2 className="heading-title white-color sc-mb-15">Trade on the go. Any devices, anytime!</h2>
                                    </div>
                                    <div className="description sc-mb-25 white-color">The most trusted & secure crypto wallet</div>
                                    <div className="apps-btn-area d-flex align-items-center">
                                        <div className="apps-btn sc-mr-20">
                                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" ><span><i className="ri-apple-fill"></i>Apps Store</span></a>
                                        </div>
                                        <div className="apps-btn">
                                            <a href="https://play.google.com/" target="_blank" rel="noreferrer"> <span><i className="ri-google-play-fill"></i>Play Store</span></a>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-lg-6" data-aos="slide-left" data-aos-duration="800">
                                    <div className="sc_apps_image">
                                        <img src={appsImg} alt="Apps" />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home3Apps;