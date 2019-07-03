import React, { Component } from 'react';
import SimplePopover from './simplePopover';
import MouseOverPopover from './mouseOverPopover';
import PopoverPopupState from './popoverPopupState';


class PopoverEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Popover</h1>
                    <div className="form-group">
                        <label><h3>Simple Popover</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimplePopover/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Mouse over interaction</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MouseOverPopover/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>PopupState helper</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <PopoverPopupState/>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default PopoverEg;