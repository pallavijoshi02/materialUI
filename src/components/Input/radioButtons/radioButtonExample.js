import React, { Component } from 'react';
import RadioButtonsGroup from './radioGroup';
import FormControlLabelPosition from './labelPlacementRadio';
import RadioButtons from './radioButtons';
import Collapse from '@material-ui/core/Collapse';
import LabelPlacementRadioCode from '../../../preComponents/Input/radioButtons/labelPlacementRadio';
import RadioButtonCode from '../../../preComponents/Input/radioButtons/radioButtons';
import RadioButtonGrouopCode from '../../../preComponents/Input/radioButtons/radioGroup';


class RadioButtonExample extends Component {
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
                    <h1>Radio Button</h1>
                    <p className="text-justify">
                        Use radio buttons when the user needs to see all available options.
                        If available options can be collapsed, consider using a dropdown menu because it uses less space.
                        Radio buttons should have the most commonly used option selected by default.

                    </p>
                    <div className="form-group">
                        <label><h3>Radio Button Group</h3></label> <label><h3> Image-Only Grid List</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <RadioButtonGrouopCode />
                        </Collapse>
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
                        <label><h3> Image-Only Grid List</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <LabelPlacementRadioCode />
                        </Collapse>
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
                        <label><h3> Image-Only Grid List</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <RadioButtonCode />
                        </Collapse>
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

