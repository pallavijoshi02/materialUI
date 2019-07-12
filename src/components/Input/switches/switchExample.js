import React, { Component } from 'react';
import CustomizedSwitches from './customizedSwitches';
import FormControlLabelPosition from './labelPlacement';
import SwitchesGroup from './switchesGroup'
import SwitchLabels from './switchLabels';
import Collapse from '@material-ui/core/Collapse';
import LabelPlacementSwitchCode from '../../../preComponents/Input/switches/labelPlacement';
import CustomizedSwitchCode from '../../../preComponents/Input/switches/customizedSwitches';
import SwitchGroupCode from '../../../preComponents/Input/switches/switchesGroup';
import SwitchLabelCode from '../../../preComponents/Input/switches/switchLabels';

class SwitchExamples extends Component {
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
                    <h1>Switches</h1>
                    <p className="text-justify">
                    Switches are the preferred way to adjust settings on mobile. The option that the switch controls, 
                    as well as the state it’s in, should be made clear from the corresponding inline label.
                    </p>
                    <div className="form-group">
                        <label><h3>Label Placement</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <LabelPlacementSwitchCode />
                        </Collapse>
                        <p className="text-justify">
                        You can change the placement of the label:
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FormControlLabelPosition />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Customized Switch</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomizedSwitchCode />
                        </Collapse>
                        <p className="text-justify">
                        Here are some examples of customizing the component. 
                        You can learn more about this in the overrides documentation page.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedSwitches />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Switch Group </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SwitchGroupCode />
                        </Collapse>
                        <p className="text-justify">
                        FormGroup is a helpful wrapper used to group selection controls components 
                        that provides an easier API. However, we encourage you to use a Checkbox instead.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SwitchesGroup />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Switch Label</h3></label> 
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SwitchLabelCode />
                        </Collapse>
                        <p className="text-justify">
                        Switch can also be used with a label description thanks to the FormControlLabel component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SwitchLabels />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SwitchExamples;
