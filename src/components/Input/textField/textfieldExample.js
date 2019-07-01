import React, { Component } from 'react';
import ComposedTextField from './composedTextfields';
import CustomizedInputs from './customizedInput';
import FilledInputAdornments from './filledInputAdorenment';
import FilledTextFields from './filledTextfields';
import FormattedInputs from './formattedInputs';
import InputAdornments from './InputAdorenment';
import Inputs from './inputTextfields';
import InputWithIcon from './inputWithIcon';
import OutlinedInputAdornments from './outlinedInputadorenmrnt';
import OutlinedTextFields from './outlinedTextfields';
import TextFields from './textfields';
import TextFieldMargins from './layoutTextField';

class TextfieldExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            composedTextfield: false,
            customizedInput: false,
            filledInput: false,
            filledTextfield: false,
            formattedInputs: false,
            inputAdorenment: false,
            inputTextfield: false,
            inputWithIcon: false,
            layoutTextfield: false,
            outlineInput: false,
            outlineTextfield: false,
            textfield: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'composedTextfield') {
            this.setState({
                composedTextfield: !this.state.composedTextfield,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        }
        else if (event.target.name === 'customizedInput') {
            this.setState({
                composedTextfield: false,
                customizedInput: !this.state.customizedInput,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        }
        else if (event.target.name === 'filledInput') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: !this.state.filledInput,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        }
        else if (event.target.name === 'filledTextfield') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: !this.state.filledTextfield,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        } else if (event.target.name === 'formattedInputs') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: !this.state.formattedInputs,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        }
        else if (event.target.name === 'inputAdorenment') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: !this.state.inputAdorenment,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        }
        else if (event.target.name === 'inputTextfield') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: !this.state.inputTextfield,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        } else if (event.target.name === 'inputWithIcon') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: !this.state.inputWithIcon,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        } else if (event.target.name === 'layoutTextfield') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: !this.state.layoutTextfield,
                outlineInput: false,
                outlineTextfield: false,
                textfield: false,
            })
        } else if (event.target.name === 'outlineInput') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: !this.state.outlineInput,
                outlineTextfield: false,
                textfield: false,
            })
        } else if (event.target.name === 'outlineTextfield') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: !this.state.outlineTextfield,
                textfield: false,
            })
        } else if (event.target.name === 'textfield') {
            this.setState({
                composedTextfield: false,
                customizedInput: false,
                filledInput: false,
                filledTextfield: false,
                formattedInputs: false,
                inputAdorenment: false,
                inputTextfield: false,
                inputWithIcon: false,
                layoutTextfield: false,
                outlineInput: false,
                outlineTextfield: false,
                textfield: !this.state.textfield,
            })
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="composedTextfield" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Composed TextFields</button>
                        <button type="button" name="customizedInput" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Customized Input</button>
                        <button type="button" name="filledInput" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Filled Input Adorenment</button>
                        <button type="button" name="filledTextfield" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Filled TextField</button>

                        <button type="button" name="inputAdorenment" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Formatted Inputs</button>
                        <button type="button" name="inputTextfield" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Input Adorenment</button>
                        <button type="button" name="inputWithIcon" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Input Textfield</button>
                        <button type="button" name="layoutTextfield" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Input With Icon</button>

                        <button type="button" name="layoutTextfield" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Layout TextField</button>
                        <button type="button" name="outlineInput" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Outline Input Adorenment</button>
                        <button type="button" name="outlineTextfield" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Outline TextField</button>
                        <button type="button" name="textfield" className="btn btn-info" onClick={this.buttonClick.bind(this)}> TextField</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.composedTextfield ? '' : <ComposedTextField />}
                            {!this.state.customizedInput ? '' : <CustomizedInputs />}
                            {!this.state.filledInput ? '' : <FilledInputAdornments />}
                            {!this.state.filledTextfield ? '' : <FilledTextFields />}
                            {!this.state.formattedInputs ? '' : < FormattedInputs />}
                            {!this.state.inputAdorenment ? '' : < InputAdornments />}
                            {!this.state.inputTextfield ? '' : <Inputs />}
                            {!this.state.inputWithIcon ? '' : <InputWithIcon />}
                            {!this.state.layoutTextfield ? '' : <TextFieldMargins/>}
                            {!this.state.outlineInput ? '' : <OutlinedInputAdornments />}
                            {!this.state.outlineTextfield ? '' : <OutlinedTextFields />}
                            {!this.state.textfield ? '' : <TextFields />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default TextfieldExample;
