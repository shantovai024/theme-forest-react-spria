import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import bannerBg4 from '../../../assets/images/banner/banner-bg4.png'
import bannerBg5 from '../../../assets/images/banner/banner-bg5.png'
import bannerBg6 from '../../../assets/images/banner/banner-bg6.png'

const HomeTwoBanner = () => {
    return (
        <>
            <section className="sc-banner-section-area sc-banner-section-area2 sc-pb-0">
                <div className="container-fluid p-0 position-relative">
                    <Fade bottom delay={200}>
                        <div className="banner-header-content text-center position-relative p-z-idex">
                            <h1 className="sc-mb-25">Discover a better way to manage Email marketing</h1>
                            <div className="description sc-mb-40">
                                It's simple. We help you send the right messages, on the right channels, at the right time. ultricies leo nunc vel risus commodo.
                            </div>
                            <div className="sc-primary-btn">
                                <Link className="secondary-btn2" to="/price#"><span>Try It’s Free</span></Link>
                            </div>
                        </div>
                    </Fade>
                    <div className="banner-image text-center shake-y sc-mt-40">
                        <img className="banner_2" src={bannerBg4} alt="Banner" />
                    </div>
                    <img className="banner-shape banner-shpae1" src={bannerBg6} alt="Banner" />
                    <img className="banner-shape banner-shpae2" src={bannerBg5} alt="Banner" />
                </div>
            </section>
        </>
    );
};

export default HomeTwoBanner;