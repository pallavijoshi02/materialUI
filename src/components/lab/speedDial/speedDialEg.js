import React, { Component } from 'react';
import SpeedDials from './simpleSpeedDial';
import OpenIconSpeedDial from './openIconSpeedDial';
import SpeedDialTooltipOpen from './speedDialToolTip';
import Collapse from '@material-ui/core/Collapse';
import SimpleSeepdDialCode from '../../../preComponents/lab/speedDial/simpleSpeedDial';
import OpenIconSpeedDialCode from '../../../preComponents/lab/speedDial/openIconSpeedDial';
import SpeedDialTooltipCode from '../../../preComponents/lab/speedDial/speedDialToolTip';

class SpeedDialEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked:false
        }
    }

    showClick(){
        this.setState({
                checked:!this.state.checked
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Speed Dial</h1>
                    <div className="form-group">
                        <label><h3>Simple Speed Dial</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleSeepdDialCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SpeedDials/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Custom close icon</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <OpenIconSpeedDialCode />
                        </Collapse>
                        <p className="text-justify">
                        You can provide an alternate icon for the closed and open states using the icon and openIcon props of the SpeedDialIcon component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <OpenIconSpeedDial/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Persistent action tooltips</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SpeedDialTooltipCode />
                        </Collapse>
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