import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import LabelBottomNavigation from './noLabelnavigation';

class BottomNavigationEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Bottom Navigation</h1>
                    <p className="text-justify">
                        Bottom navigation bars display three to five destinations at the bottom of a screen.
                        Each destination is represented by an icon and an optional text label. When a bottom navigation icon
                        is tapped, the user is taken to the top-level navigation destination associated with that icon.</p>
                    <div className="form-group">
                        <label><h3>Simple Bottom Navigation</h3></label>
                        <p className="text-justify">
                            When there are only three actions, display both icons and text labels at all times.
                            </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleBottomNavigation />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Label Bottom Navigation</h3></label>
                        <p className="text-justify">
                            If there are four or five actions, display inactive views as icons only.</p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <LabelBottomNavigation />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BottomNavigationEg;
