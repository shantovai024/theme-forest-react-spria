import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const Home2Price = () => {
    let [priceToggle, setPriceToggle] = useState(true)
    return (
        <>
            <section className="sc-price-area third-bg sc-pt-125 sc-md-pt-65 sc-pb-140 sc-md-pb-80 sc-sm-mb-40">
                <div className="container">
                    <div className="sc-heading-area text-white sc-mb-40 sc-md-mb-30 text-center">
                        <h2 className="title sc-mb-25 text-white">Really Simple Pricing</h2>
                        <span className="sub_title text-white">No Hidden Fees, No Limits</span>
                    </div>
                    <div className="pricing-selector">
                        <form >
                            <button type="button" className="pricing-monthly-btn text-white">Monthly</button>
                            <input type="checkbox" className='bg-white' name="pricing-selector" id="pricing-selector" onChange={() => setPriceToggle(!priceToggle)} />
                            <button type="button" className="pricing-yearly-btn text-white">Yearly <span className='text-white'>(35% Off)</span></button>
                        </form>
                    </div>
                    <div className={`${priceToggle ? 'pricing-monthly' : 'pricing-monthly d-none'}`}>
                        <div className="row">
                            <Fade bottom delay={100}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30" data-aos="slide-up" data-aos-duration="800" data-aos-delay="100">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Free</h4>
                                            <div className="price-active third_color">$0.00<span className="month"> - Month</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Prosonal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i><span>1 Users</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>SaaS Metrics</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Team Collaboration</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Upload Your Document</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Export PDF</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="secondary-btn" to="/price#"><span>Try It’s Free</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={200}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30" data-aos="slide-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Basic</h4>
                                            <div className="price-active price">$49.99<span className="month"> - Month</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Prosonal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>1 Users</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>SaaS Metrics</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Team Collaboration</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Upload Your Document</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Export PDF</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="secondary-btn" to="/price#"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="price_sale">
                                            <span className="popular">popular</span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={300}>
                                <div className="col-lg-4 col-md-6" data-aos="slide-up" data-aos-duration="800" data-aos-delay="300">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Pro</h4>
                                            <div className="price-active price">$69.99<span className="month"> - Month</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Prosonal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>1 Users</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>SaaS Metrics</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Team Collaboration</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Upload Your Document</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Export PDF</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="secondary-btn" to="/price#"><span>Buy Now</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={`${priceToggle ? 'pricing-yearly d-none' : 'pricing-yearly'}`}>
                        <div className="row">
                            <Fade bottom delay={100}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Free</h4>
                                            <div className="price-active third_color">$25.00<span className="month"> - Year</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Prosonal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i><span>1 Users</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>SaaS Metrics</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Team Collaboration</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Upload Your Document</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Export PDF</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="secondary-btn" to="/price#"><span>Try It’s Free</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={200}>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Basic</h4>
                                            <div className="price-active price">$89.99<span className="month"> - Year</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Prosonal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>1 Users</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>SaaS Metrics</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Team Collaboration</span></li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Upload Your Document</li>
                                                <li><i className="ri-checkbox-circle-fill check"></i>Export PDF</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="secondary-btn" to="/price#"><span>Buy Now</span></Link>
                                        </div>
                                        <div className="price_sale">
                                            <span className="popular">popular</span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom delay={300}>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sc-price-box">
                                        <div className="price-item">
                                            <h4 className="pric-title">Pro</h4>
                                            <div className="price-active price">$99.99<span className="month"> - Year</span></div>
                                        </div>
                                        <div className="perfect-title">Perfect for Prosonal</div>
                                        <div className="price-list">
                                            <ul className="list">
                                                <li><i className="ri-checkbox-circle-fill"></i>1 Users</li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>SaaS Metrics</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Team Collaboration</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i><span>Upload Your Document</span></li>
                                                <li><i className="ri-checkbox-circle-fill"></i>Export PDF</li>
                                            </ul>
                                        </div>
                                        <div className="sc-primary-btn">
                                            <Link className="secondary-btn" to="/price#"><span>Buy Now</span></Link>
                                        </div>
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

export default Home2Price;