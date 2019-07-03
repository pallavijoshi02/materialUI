import React, { Component } from 'react';
import BottomAppBar from './bottomAppBar';
import ButtonAppBar from './buttonAppBar';
import DenseAppBar from './denseAppBar';
import ElevateAppBar from './elevateAppBar';
import HideAppBar from './hideAppBar';
import MenuAppBar from './menuAppBar';
import PrimarySearchAppBar from './primarySearchAppBar';
import SearchAppBar from './searchAppBar';
import SimpleAppBar from './simpleAppBar';


class AppBarExample extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>App Bar</h1>
                    <p className="text-justify">
                    The top App Bar provides content and actions related to the current screen.
                     It’s used for branding, screen titles, navigation, and actions.

                        It can transform into a contextual action bar or used as a navbar.
                  </p>
                    <div className="form-group">
                        <label><h3>App Bar with buttons</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <ButtonAppBar/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Simple App Bar</h3></label>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <SimpleAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>App Bar with a primary search field</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <PrimarySearchAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>App Bar with menu</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MenuAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>App Bar with search field</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SearchAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Dense (desktop only)</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <DenseAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Bottom App Bar</h3></label>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <BottomAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Hide App Bar</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <HideAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Elevate App Bar</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                       <ElevateAppBar/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppBarExample;