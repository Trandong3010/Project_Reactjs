import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-8 mx-auto my-4">
                                <h2 className="page-section-heading text-uppercase text-center">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                                <hr className="primary small mb-5" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="row control-group">
                                        <div className="form-group col-12 floating-label-form-group controls">
                                            <label>Name</label>
                                            <input type="text" className="form-control" placeholder="Name" id="name" required="required" data-validation-required-message="Please enter your name." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="row control-group">
                                        <div className="form-group col-12 floating-label-form-group controls">
                                            <label>Email Address</label>
                                            <input type="email" className="form-control" placeholder="Email Address" id="email" required="required" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="row control-group">
                                        <div className="form-group col-12 floating-label-form-group controls">
                                            <label>Phone Number</label>
                                            <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required="required" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="row control-group">
                                        <div className="form-group col-12 floating-label-form-group controls">
                                            <label>Message</label>
                                            <textarea rows={5} className="form-control" placeholder="Message" id="message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success" />
                                    <div className="row">
                                        <div className="form-group col-12">
                                            <button type="submit" className="btn btn-outline-primary">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;