import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div id="contact" className="section md-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title">Get in touch</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact">
                                <i className="fa fa-phone" />
                                <h3>Phone</h3>
                                <p>512-421-3940</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact">
                                <i className="fa fa-envelope" />
                                <h3>Email</h3>
                                <p>gkmit@support.com</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact">
                                <i className="fa fa-map-marker" />
                                <h3>Address</h3>
                                <p> 702-703, Manglam Fun Square, Durga Nursery Road, Udaipur, India, Rajasthan 313001
                                  Landline : 0294-6500911
                                  Mobile : +91-9887897376
                                  kriti@gkmit.co
                              http://www.gkmit.co</p>
                            </div>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <form className="contact-form">
                                <input type="text" className="input" placeholder="Name" required />
                                <input type="email" className="input" placeholder="Email" required />
                                <input type="text" className="input" placeholder="Subject" required />
                                <textarea className="input" placeholder="Message" required defaultValue={""} />
                                <button className="main-btn">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;