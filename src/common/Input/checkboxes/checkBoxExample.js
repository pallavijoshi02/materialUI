import React, { Component } from 'react';
import Checkboxes from './checkbox';
import CheckboxesGroup from './checkboxesGroup';
import CheckboxLabels from './formControlLabel';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabelPosition from './labelPlacement';
import CheckBoxCode from '../../../preComponents/Input/checkboxes/checkbox';
import CheckBoxGroupCode from '../../../preComponents/Input/checkboxes/checkboxesGroup';
import FromControlLabelCode from '../../../preComponents/Input/checkboxes/formControlLabel';
import LabelPlacementCode from '../../../preComponents/Input/checkboxes/labelPlacement';


class CheckboxExample extends Component {
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
                    <h1>Checkboxes</h1>
                    <p className="text-justify">
                    Checkboxes allow the user to select one or more items from a set.
                    </p>
                    <div className="form-group">
                        <label><h3>Checkboxes</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CheckBoxCode />
                        </Collapse>
                        <p className="text-justify">
                        If you have multiple options appearing in a list, you can preserve space by using checkboxes 
                        instead of on/off switches. If you have a single option, avoid using a checkbox and use an
                         on/off switch instead.
                    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <Checkboxes />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3> Checkboxes group </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CheckBoxGroupCode />
                        </Collapse>
                        <p className="text-justify">
                            FormGroup is a helpful wrapper used to group selection controls components that provides an easier API.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CheckboxesGroup />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Checkboxes Label</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FromControlLabelCode />
                        </Collapse>
                        <p className="text-justify">
                              Checkbox can also be used with a label description thanks to the FormControlLabel component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CheckboxLabels />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Label Placement</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <LabelPlacementCode />
                        </Collapse>
                        <p className="text-justify">
                        You can change the placement of the label:
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FormControlLabelPosition />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckboxExample;

