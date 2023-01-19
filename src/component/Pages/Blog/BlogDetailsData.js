import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BlogForm from './BlogForm';
import BlogSidebar from './BlogSidebar';
import pagesBlogImg from '../../../assets/images/blog/pages_blog_img.jpg'
import detailsIcon from '../../../assets/images/icons/details_icon.png'
import detailsAuthor1 from '../../../assets/images/blog/details_author.png'
import detailsAuthor2 from '../../../assets/images/blog/details_author2.png'
import detailsAuthor3 from '../../../assets/images/blog/details_author3.png';

const BlogDetailsData = () => {
    return (
        <>
            <section>
                <div className="sc-blog-details sc-pt-140 sc-md-pt-80 sc-pb-20 sc-md-pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog-item">
                                    <div className="blog-image">
                                        <Link smooth to="#"><img src={pagesBlogImg} alt="Blog" /></Link>
                                    </div>
                                    <div className="blog-content p-0">
                                        <div className="blog_date">
                                            <ul>
                                                <li>01</li>
                                                <li>Aus</li>
                                            </ul>
                                        </div>
                                        <div className="blog-list-menu list_menu sc-pt-20">
                                            <ul className="blog-list">
                                                <li><i className="ri-edit-fill"></i><Link smooth to="#"> Admin</Link></li>
                                                <li><i className="ri-chat-3-fill"></i><Link smooth to="#"> 05 Comment</Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="blog-title sc-pt-15 sc-mb-15 fw-bold">
                                            <Link smooth to="#">We can blend colors multiple ways, the most common</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="details-content-area sc-md-mb-50">
                                    <div className="details-content">
                                        <div className="description sc-mb-25">
                                            Nisl pretium fusce id velit ut tortor pretium viverra. Odio aenean sed adipiscing diam. Sed risus pretium quam vulputate dignissim suspendisse
                                            in. Laoreet sit amet cursus sit. Imperdiet dui accumsan sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Tempus quam
                                            pellentesque nec nam aliquam sem. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Habitasse platea dictumst vestibulum rhoncus
                                            est.
                                        </div>
                                        <div className="description sc-mb-25">
                                            At erat pellentesque adipiscing commodo. Enim ut sem viverra aliquet eget. Placerat orci nulla pellentesque dignissim enim sit. Ornare aenean
                                            euismod elementum nisi quis eleifend quam. Volutpat sed cras ornare arcu dui vivamus arcu. Blandit libero volutpat sed cras ornare arcu dui
                                            vivamus arcu. Vitae sapien pellentesque habitant morbi. Ac felis donec et odio pellentesque. Dictumst vestibulum rhoncus est pellentesque
                                        </div>
                                        <div className="blockquote">
                                            <div className="icon-image">
                                                <img src={detailsIcon} alt="Icons" />
                                            </div>
                                            <div className="description sc-mb-25">
                                                “You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's
                                                heaven on earth.”
                                            </div>
                                            <span>-Paul Rand</span>
                                        </div>
                                        <div className="description sc-mb-25">
                                            Ullamcorper eget nulla facilisi etiam dignissim diam quis. At elementum eu facilisis sed. Venenatis a condimentum vitae sapien pellentesque
                                            habitant morbi tristique senectus. At in tellus integer feugiat scelerisque varius morbi. Tempor id eu nisl nunc mi ipsum faucibus vitae. Dolor
                                            sed viverra ipsum nunc aliquet bibendum enim facilisis. Id neque aliquam vestibulum morbi blandit cursus risus at. Euismod nisi porta lorem
                                            mollis aliquam.
                                        </div>
                                    </div>
                                    <div className="details-title-item">
                                        <div className="details-social-list d-flex align-items-center">
                                            <h6 className="title">Share :</h6>
                                            <div className="list-icon">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i className="ri-facebook-fill"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/" rel="noreferrer"><i className="ri-twitter-fill"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkedin.com/" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/" rel="noreferrer"><i className="ri-instagram-fill"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="metaverse-title">
                                        <h4 className="title fw-bold sc-mb-30">03 Comments</h4>
                                    </div>
                                    <div className="details-author-box d-flex">
                                        <div className="details-img">
                                            <img src={detailsAuthor1} alt="Blog" />
                                        </div>
                                        <div className="title-box">
                                            <div className="author-text">
                                                <h4 className="title">Esther Howard</h4>
                                                <div className="description">
                                                    Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nulla pellentesque dignissim enim sit. Vel facilisis volutpat est velit
                                                    egestas nibh sed pulvinar proin.
                                                </div>
                                            </div>
                                            <div className="details-btn">
                                                <Link smooth to="#" className="details-primary"><i className="ri-reply-line"></i> Replay</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-author-box d-flex sc-ml-95">
                                        <div className="details-img">
                                            <img src={detailsAuthor2} alt="Blog" />
                                        </div>
                                        <div className="title-box">
                                            <div className="author-text">
                                                <h4 className="title">David Beckham</h4>
                                                <div className="description">
                                                    Nulla pellentesque enim sit. Vel facilisis est velit egestas nibh sed pulvinar proin. Elit sed mi sit amet mauris commodo quis
                                                    imperdiet.
                                                </div>
                                            </div>
                                            <div className="details-btn">
                                                <Link to="#" className="details-primary"><i className="ri-reply-line"></i> Replay</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="details-author-box d-flex">
                                        <div className="details-img">
                                            <img src={detailsAuthor3} alt="Blog" />
                                        </div>
                                        <div className="title-box">
                                            <div className="author-text">
                                                <h4 className="title">David Jhon</h4>
                                                <div className="description">
                                                    Vel facilisis volutpat est velit egestas nibh sed pulvinar proin. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nulla
                                                    pellentesque dignissim enim sit.
                                                </div>
                                            </div>
                                            <div className="details-btn">
                                                <Link smooth to="#" className="details-primary"><i className="ri-reply-line"></i> Replay</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <BlogForm></BlogForm>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar></BlogSidebar>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsData;