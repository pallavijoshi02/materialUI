import React, { Component } from 'react';
import ToggleButtons from './toggleButtonGroup';
import ToggleButtonSizes from './toggleButtonSize';


class ToggleEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Toggle Buttons</h1>
                    <div className="form-group">
                        <label><h3>Toggle Button</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <ToggleButtons/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Button Size</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ToggleButtonSizes/>
                        </div>
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default ToggleEg;