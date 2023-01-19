import React from 'react';
import { Fade } from 'react-reveal';
import CountUp from 'react-countup';

const Home3Counter = () => {
    return (
        <>
            <section className="sc-counter-area style-two sc-pt-60 sc-pb-65">
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <Fade bottom delay={300}>
                            <div className="col-lg-4" data-aos="slide-up" data-aos-duration="800" data-aos-delay="300">
                                <div className="sc-counter-box sc-md-mb-25 text-center">
                                    <div className="sc-count">$<span><CountUp end={1} duration={1} />.<CountUp end={5} duration={3} /></span>M</div>
                                    <h4 className="count-title white-color">Processed in crypto last year</h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={400}>
                            <div className="col-lg-4" data-aos="slide-up" data-aos-duration="800" data-aos-delay="400" >
                                <div className="sc-counter-box sc-md-mb-25 text-center">
                                    <div className="sc-count">Over<span><CountUp end={4} duration={3} /></span>M</div>
                                    <h4 className="count-title white-color">Total transactions processed</h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={500}>
                            <div className="col-lg-4" data-aos="slide-up" data-aos-duration="800" data-aos-delay="500">
                                <div className="sc-counter-box counter-border text-center">
                                    <div className="sc-count"><span><CountUp end={500} duration={3} /></span>+</div>
                                    <h4 className="count-title white-color">Satisfied online businesses</h4>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home3Counter;