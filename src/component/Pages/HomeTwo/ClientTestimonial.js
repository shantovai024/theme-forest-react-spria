import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import clientImg from '../../../assets/images/icons/client-img.png'
import clientImg1 from '../../../assets/images/icons/client_img1.png'
import clientImg3 from '../../../assets/images/icons/client_img.png'
import clientImg2 from '../../../assets/images/icons/client_img2.png'

const ClientTestimonial = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="ri-arrow-right-line"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="ri-arrow-left-line"></i></button>;
    };

    return (
        <>
            <section className="sc-client-section-area yellow-bg sc-pt-125 sc-md-pt-65 sc-pb-140 sc-md-pb-80">
                <div className="container">
                    <div className="client-testimonial-wrap">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="sc-heading-area sc-mb-55 sc-md-mb-45 text-center">
                                    <h2 className="heading-title sc-mb-25">Check what’s our client say about us</h2>
                                </div>
                            </div>
                        </div>

                        <div className='client-carousel-wrapper'>
                            <Carousel className="client-carousel"
                                infinite={true}
                                draggable={true}
                                arrows={true}
                                pauseOnHover={true}
                                slidesToSlide={1}
                                swipeable={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                customRightArrow={<CustomRightArrow></CustomRightArrow>}
                                customLeftArrow={<CustomLeftArrow></CustomLeftArrow>}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 992
                                        },
                                        items: 3,
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 991,
                                            min: 577
                                        },
                                        items: 2,
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 576,
                                            min: 1
                                        },
                                        items: 1,
                                    }
                                }}>
                                <div className="sc-client-item">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more and more each day because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg3} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Cathy Hicks</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-client-item">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more and more each day because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg1} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Dianne Russell</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-client-item">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more and more each day because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg2} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Guy Hawkins</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-client-item">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more and more each day because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg1} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Dianne Russell</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientTestimonial;