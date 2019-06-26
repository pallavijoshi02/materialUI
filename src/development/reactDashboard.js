import React, { Component } from 'react';
import AboutUs from './about';
import Service from './service';
import Carrer from './carrer';
import ContactUs from './contactUs';
import Header from '../common/header';


class NewDashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutUs />
                <Service />
                <Carrer />
                <ContactUs />
                <div id="back-to-top" />
                <div id="preloader">
                    <div className="preloader">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

        )
    }
}

export default NewDashboard;