import React, { Component } from 'react';
import Checkboxes from './checkbox';
import CheckboxesGroup from './checkboxesGroup';
import CheckboxLabels from './formControlLabel';
import FormControlLabelPosition from './labelPlacement';


class CheckboxExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkbox: false,
            checkBoxGroup: false,
            checkboxLabel: false,
            labelPosition: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'checkbox') {
            this.setState({
                checkbox: !this.state.checkbox,
                checkBoxGroup: false,
                checkboxLabel: false,
                labelPosition: false,
            })
        }
        else if (event.target.name === 'checkBoxGroup') {
            this.setState({
                checkbox: false,
                checkBoxGroup: !this.state.checkBoxGroup,
                checkboxLabel: false,
                labelPosition: false,
            })
        }
        else if (event.target.name === 'checkboxLabel') {
            this.setState({
                checkbox: false,
                checkBoxGroup: false,
                checkboxLabel: !this.state.checkboxLabel,
                labelPosition: false,
            })
        }
        else if (event.target.name === 'labelPosition') {
            this.setState({
                checkbox: false,
                checkBoxGroup: false,
                checkboxLabel: false,
                labelPosition: !this.state.labelPosition,
            })
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="checkbox" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Checkboxes</button>
                        <button type="button" name="checkBoxGroup" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Checkboxes Group</button>
                        <button type="button" name="checkboxLabel" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Checkbox Labels</button>
                        <button type="button" name="labelPosition" className="btn btn-info" onClick={this.buttonClick.bind(this)}> FormC ontrol Label Position</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.checkbox ? '' : <Checkboxes />}
                            {!this.state.checkBoxGroup ? '' : <CheckboxesGroup />}
                            {!this.state.checkboxLabel ? '' : <CheckboxLabels />}
                            {!this.state.labelPosition ? '' : <FormControlLabelPosition />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
export default CheckboxExample;

