import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div id="about" className="section md-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title">Welcome to GKMIT</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="about">
                                <i className="fa fa-magic" />
                                <h3>Our Vision</h3>
                                <p>
                                    Software Company to be admired as the best in what it does through continuous
                                    innovations.
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about">
                                <i className="fa fa-mobile" />
                                <h3>Our Mission</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    1. Building a value oriented product for the client. <br />
                                    2. Understanding the problem and bringing optimal solution. <br />
                                    3. Following Agile Methodology which helps the team to grow stay focus and
                                       deliver.
                                   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;