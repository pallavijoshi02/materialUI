import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <div className="bg-img" style={{ backgroundImage: 'url("/img/background1.jpg")' }}>
                    <div className="overlay" />
                </div>
                <nav id="nav" className="navbar nav-transparent fixed">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <a href="index.html">
                                    <img className="logo-alt" src="/img/gkm-logo1.jpg" style={{ height: 24, marginTop: 14 }} />
                                    {/* <img  src="../img/gkm-logo1.jpg" alt="logo" /> */}
                                </a>
                            </div>
                            <div className="nav-collapse">
                                <span />
                            </div>
                        </div>
                        <ul className="main-nav nav navbar-nav navbar-right">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#pricing">Carrers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="home-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="home-content">
                                    <h1 style={{ color: 'red' }}>GKMIT</h1>
                                    <p className="white-text">
                                    </p><h2 className="white-text">WE DO</h2><br />
                                    <h2 className="white-text">BUILD</h2><br />
                                    <h2 className="white-text">WEB APPLICATION</h2>
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;