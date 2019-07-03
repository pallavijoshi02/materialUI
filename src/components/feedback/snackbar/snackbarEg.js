import React, { Component } from 'react';
import SimpleSnackbar from './simpleSnackBar';
import CustomizedSnackbars from './customizedSnackBar';
import LongTextSnackbar from './messageLength';
import ConsecutiveSnackbar from './consecutiveSnackbar';
import FabIntegrationSnackbar from './fabSnackBar';
import TransitionsSnackbar from './transitionSnackBar';
import DirectionSnackbar from './directionSnackbar';
import IntegrationNotistack from './notistackSnackbar';

class SnackbarEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Snackbars</h1>
                    <p className="text-justify">
                        Snackbars inform users of a process that an app has performed or will perform.
                        They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user
                         experience, and they don’t require user input to disappear.
    
                        Snackbars contain a single line of text directly related to the operation performed.
                        They may contain a text action, but no icons. You can use them to display notifications.
                 </p>
                    <div className="form-group">
                        <label><h3>Simple snackbars</h3></label>
                        <p className="text-justify">
                            A basic snackbar that aims to reproduce Google Keep's snackbar behavior.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleSnackbar />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Customized snackbars</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedSnackbars />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Message Length</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <LongTextSnackbar />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Consecutive Snackbars</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ConsecutiveSnackbar />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Snackbars and floating action buttons (FABs)</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FabIntegrationSnackbar />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Change Transition</h3></label>
                        <p className="text-justify">
                            Grow is the default transition but you can use a different one.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TransitionsSnackbar />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Control Slide direction</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DirectionSnackbar />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>notistack</h3></label>
                        <p className="text-justify">
                            In the following example, we demonstrate how to use notistack. notistack makes
                             it easy to display snackbars (so you don't have to deal with open/close state of them).
                             It also enables you to stack them on top of one another (but discouraged by the specification).
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IntegrationNotistack />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SnackbarEg;