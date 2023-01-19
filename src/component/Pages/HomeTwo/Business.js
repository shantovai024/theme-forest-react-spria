import React from 'react';
import { Fade } from 'react-reveal';
import businessImg from '../../../assets/images/banner/business_img.png'
import shapeImage from '../../../assets/images/banner/shape_image.png'

const Business = () => {
    return (
        <>
            <section className="sc-business-section-area dark-bg-color sc-pt-140 sc-md-pt-70 sc-pb-140 sc-md-pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <Fade left>
                            <div className="col-lg-6">
                                <div className="sc-business-item sc-pr-135 sc-md-mb-150 sc-md-pr-0">
                                    <div className="sc-heading-area sc-mb-30">
                                        <h2 className="heading-title white-color sc-mb-25">Fast growing SaaS Services for your business</h2>
                                        <div className="white-dark-color">
                                            Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Metus aliquam eleifend mi in nulla posuere. Viverra ipsum nunc aliquet bibendum.
                                        </div>
                                    </div>
                                    <div className="sc-business-check-box">
                                        <ul className="check-list">
                                            <li><i className="ri-checkbox-circle-fill"></i><span>Access new sellers and markets to grow your business</span></li>
                                            <li><i className="ri-checkbox-circle-fill"></i><span>Keep your money secure until goods are shipped</span></li>
                                            <li><i className="ri-checkbox-circle-fill"></i><span>Fully verify seller's identity and compliance status</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-lg-6">
                                <div className="business-image-area">
                                    <img className="business-img" src={businessImg} alt="Business" />
                                    <img className="business-img_1" src={shapeImage} alt="Business" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Business;