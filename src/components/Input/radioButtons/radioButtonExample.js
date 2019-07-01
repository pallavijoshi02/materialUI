import React, { Component } from 'react';
import RadioButtonsGroup from './radioGroup';
import FormControlLabelPosition from './labelPlacementRadio';
import RadioButtons from './radioButtons';


class RadioButtonExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radioBtnGroup: false,
            labelPosition: false,
            raadioButton: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'radioBtnGroup') {
            this.setState({
                radioBtnGroup: !this.state.radioBtnGroup,
                labelPosition: false,
                raadioButton: false,
            })
        }
        else if (event.target.name === 'labelPosition') {
            this.setState({
                radioBtnGroup: false,
                labelPosition: !this.state.labelPosition,
                raadioButton: false,
            })
        }
        else if (event.target.name === 'raadioButton') {
            this.setState({
                radioBtnGroup: false,
                labelPosition: false,
                raadioButton: !this.state.raadioButton,
            })
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="radioBtnGroup" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Radio Buttons Group</button>
                        <button type="button" name="labelPosition" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Form Control Label Position</button>
                        <button type="button" name="raadioButton" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Radio Buttons</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.radioBtnGroup ? '' : <RadioButtonsGroup />}
                            {!this.state.labelPosition ? '' : <FormControlLabelPosition />}
                            {!this.state.raadioButton ? '' : <RadioButtons />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}


export default RadioButtonExample;