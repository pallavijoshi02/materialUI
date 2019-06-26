import React, { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <div id="service" className="section md-padding">
                <div className="bg-img" style={{ backgroundImage: 'url("./img/background1.jpg")' }}>
                    <div className="overlay" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title white-text">What we offer</h2>
                            <p className="white-text">
                                GKM IT is a family of engineers, designers and innovators with expertise in outsourced product
                                development and custom software development. We are consistently delivering for the past three
                                years - outsourcing solutions, quality software products, mobile applications and solutions for
                                start-ups, mid-size and large enterprises worldwide. We strongly believe in agile methodologies
                                to ensure quality work and client satisfaction.
                                </p>
                        </div>
                        <div className="col-md-4 col-sm-6 white-text">
                            <div className="service">
                                <i className="fa fa-diamond" />
                                <h3 className="white-text">
                                    Product Consulting
                                    </h3>
                                <p>
                                    Business idea to technology translation <br />
                                    Prototyping/MVP <br />
                                    Business Analytics <br />
                                    Market Testing <br />
                                    Stagewise Releases.
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 white-text">
                            <div className="service">
                                <i className="fa fa-mobile" />
                                <h3 className="white-text">Mobile Application Development </h3>
                                <p>
                                    Android <br />
                                    ios - Swift 1.2, 2.0 <br />
                                    Hybrid Apps <br />
                                    Native Apps <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 white-text">
                            <div className="service">
                                <i className="fa fa-cogs" />
                                <h3 className="white-text">Web Application</h3>
                                <p>
                                    Development <br />
                                    Ruby on Rails/ Node JS/Python/PHP <br />
                                    MVC <br />
                                    Agile Development <br />
                                    Mysql/Postgre Sql/MongoDB <br />
                                    Restful API's
                                      </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;