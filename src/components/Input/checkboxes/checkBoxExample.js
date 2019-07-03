import React, { Component } from 'react';
import Checkboxes from './checkbox';
import CheckboxesGroup from './checkboxesGroup';
import CheckboxLabels from './formControlLabel';
import FormControlLabelPosition from './labelPlacement';


class CheckboxExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
                        <p className="text-justify">
                              Checkbox can also be used with a label description thanks to the FormControlLabel component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CheckboxLabels />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Label Placement</h3></label>
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

