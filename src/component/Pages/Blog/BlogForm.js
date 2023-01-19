import React from 'react';
import { toast } from 'react-toastify';

const BlogForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Comment Posted Successfully")
    }

    return (
        <>
            <div className="details-form-box">
                <h4 className="title">Post a Comment</h4>
                <p>Your email address will not be published. Required fields are marked*</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">Name*</label>
                                <input type="text" id="name" placeholder="Write Your Name" autoComplete='off' required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">E-mail*</label>
                                <input type="email" id="address" placeholder="Write Your Email" autoComplete='off' required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">Phone*</label>
                                <input type="number" id="phone" placeholder="Write Your Phone Number" autoComplete='off' required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form">
                                <label className="sc-mb-10">Subject</label>
                                <input type="text" id="subject" placeholder="Write Your subject" autoComplete='off' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form sc-mb-5">
                            <label className="sc-mb-10">Message*</label>
                            <textarea autoComplete='off' placeholder="Write Your Comment" required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="submit-button sc-mb-10">
                            <input className="submit-btn" type="submit" value="Submit Now" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BlogForm;