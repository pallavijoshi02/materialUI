import React, { Component } from 'react';
import SpeedDials from './simpleSpeedDial';
import OpenIconSpeedDial from './openIconSpeedDial';
import SpeedDialTooltipOpen from './speedDialToolTip';

class SpeedDialEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Speed Dial</h1>
                    <div className="form-group">
                        <label><h3>Simple Speed Dial</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SpeedDials/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Custom close icon</h3></label>
                        <p className="text-justify">
                        You can provide an alternate icon for the closed and open states using the icon and openIcon props of the SpeedDialIcon component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <OpenIconSpeedDial/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Persistent action tooltips</h3></label>
                        <p className="text-justify">
                        The SpeedDialActions tooltips can be be displayed persistently so that users don't have to long-press in order to see the tooltip on touch devices.

                            It is enabled here across all devices for demo purposes, but in production it could use the isTouch logic to conditionally set the property.
                            </p>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SpeedDialTooltipOpen/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpeedDialEg;