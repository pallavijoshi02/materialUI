import React, { Component } from 'react';
import RadioButtonsGroup from './radioGroup';
import FormControlLabelPosition from './labelPlacementRadio';
import RadioButtons from './radioButtons';


class RadioButtonExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Radio Button</h1>
                    <p className="text-justify">
                        Use radio buttons when the user needs to see all available options.
                        If available options can be collapsed, consider using a dropdown menu because it uses less space.
                        Radio buttons should have the most commonly used option selected by default.

                    </p>
                    <div className="form-group">
                        <label><h3>Radio Button Group</h3></label>
                        <p className="text-justify">
                            RadioGroup is a helpful wrapper used to group Radio components that provides an easier API,
                            and proper keyboard accessibility to the group.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <RadioButtonsGroup />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Label Placement</h3></label>
                        <p className="text-justify">
                            You can change the placement of the label:
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FormControlLabelPosition />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Radio Button </h3></label>
                        <p className="text-justify">
                            Radio can also be used standalone, without the wrapper.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <RadioButtons />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RadioButtonExample;

