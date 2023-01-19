import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import bannerGroup from '../../../assets/images/banner/banner-group.png'
import bannerGroup2 from '../../../assets/images/banner/banner-group2.png'
import bannerFrame from '../../../assets/images/icons/banner_frame.png'
import bannerFrame2 from '../../../assets/images/icons/banner_frame2.png'

const Home3Banner = () => {
    return (
        <>
            <section className="sc-banner-section-area3 sc-pt-130 sc-pb-50 ">
                <Fade top>
                    <div className="banner-circle-shape2 ">
                    </div>
                </Fade>
                <div className="container-fluid p-0">
                    <div className="row sc-banner-item d-flex align-items-center">
                        <div className="col-md-6">
                            <Fade bottom delay={100}>
                                <div className="banner-header-content" >
                                    <span className="sc-sub-title purple-color p-z-idex text-uppercase">Cryoto Wallet</span>
                                    <h1 className="banner-title sc-mb-25 p-z-idex">The Most Trusted Crypto Wallet</h1>
                                    <div className="sc-mb-40">
                                        Nunc sed blandit libero volutpat sed cras ornare arcu. Nibh venenatis cras sed felis eget velit aliquet.Lorem tincidunt id sed pulvinar aliquet in
                                        ante metus.
                                    </div>
                                    <div className="banner-btn-area">
                                        <Link className="third-btn" to="/price#"><span>Start 14 days Free</span></Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6">
                            <div className="banner_image shake-y ">
                                <Fade left delay={600}>
                                    <img className="banner-1" src={bannerGroup} alt="Banner" />
                                </Fade>
                                <Fade right delay={400}>
                                    <img className="banner-2" src={bannerGroup2} alt="Banner" />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-shape"></div>
                <div className="banner_frame d-none d-md-block">
                    <img className="frame_1" src={bannerFrame} alt="Frame" />
                    <img className="frame_2" src={bannerFrame2} alt="Frame" />
                </div>
            </section>
        </>
    );
};

export default Home3Banner;