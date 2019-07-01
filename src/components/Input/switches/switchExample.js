import React, { Component } from 'react';
import CustomizedSwitches from './customizedSwitches';
import FormControlLabelPosition from './labelPlacement';
import SwitchesGroup from './switchesGroup'
import SwitchLabels from './switchLabels';

class SwitchExamples extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customizedSwitches: false,
            labelPosition: false,
            switchesGroup: false,
            switchLabels: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'customizedSwitches') {
            this.setState({
                customizedSwitches: !this.state.customizedSwitches,
                labelPosition: false,
                switchesGroup: false,
                switchLabels: false,
            })
        }
        else if (event.target.name === 'labelPosition') {
            this.setState({
                customizedSwitches: false,
                labelPosition: !this.state.labelPosition,
                switchesGroup: false,
                switchLabels: false,
            })
        }
        else if (event.target.name === 'switchesGroup') {
            this.setState({
                customizedSwitches: false,
                labelPosition: false,
                switchesGroup: !this.state.switchesGroup,
                switchLabels: false,
            })
        }
        else if (event.target.name === 'switchLabels') {
            this.setState({
                customizedSwitches: false,
                labelPosition: false,
                switchesGroup: false,
                switchLabels: !this.state.switchLabels,
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="customizedSwitches" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Customized Switches</button>
                        <button type="button" name="labelPosition" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Form Control Label Position</button>
                        <button type="button" name="switchesGroup" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Switches Group</button>
                        <button type="button" name="switchLabels" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Switch Labels</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.customizedSwitches ? '' : <CustomizedSwitches />}
                            {!this.state.labelPosition ? '' : <FormControlLabelPosition />}
                            {!this.state.switchesGroup ? '' : <SwitchesGroup />}
                            {!this.state.switchLabels ? '' : <SwitchLabels />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default SwitchExamples;
