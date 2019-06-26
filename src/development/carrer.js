import React, { Component } from 'react';

class Carrer extends Component {
    render() {
        return (
            <div id="pricing" className="section md-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title">Carrers</h2>
                        </div>
                        <div className="col-md-4">
                            <div className="about">
                                <i className="fa fa-magic" />
                                <h3>Frontend Engineer</h3>
                                <p>
                                    Must have 1+ years experience <br />
                                    Bootstrap, JavaScript, CSS3, and HTML5 <br />
                                    Must have a solid grasp of development and testing methodologies, object-oriented <br />
                                    programming, and automated software testing <br />
                                    Make strategic technical decisions related to new products and functionalities <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about">
                                <i className="fa fa-mobile" />
                                <h3>Backend Engineer</h3>
                                <p>
                                    1.At least 2 years of experience with MVC/web-services (will train in Ruby on Rails) <br />
                                    2.REST API <br />
                                    3.TDD (Test-driven Development) <br />
                                    4.Experience with 3rd Party Integrations (Payment Systems, Social Login, Google Maps etc.)
                                  <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about">
                                <i className="fa fa-mobile" />
                                <h3>IOS / Android Developer</h3>
                                <p>
                                    1. REST API <br />
                                    2. Experience with 3rd Party Integrations (Payment Systems, Social Login, Google Maps
                                   etc.)<br />
                                    3. Have already written an API <br />
                                    4. Know Mobile Development life cycle
                                5.Integration and Adapting to an agile environment <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrer;