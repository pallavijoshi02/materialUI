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
import Collapse from '@material-ui/core/Collapse';
import ComposedTextFieldCode from '../../../preComponents/Input/textField/composedTextfields';
import CustomizedInputCode from '../../../preComponents/Input/textField/customizedInput';
import FilledInputAdornmentsCode from '../../../preComponents/Input/textField/filledInputAdorenment';
import FilledTextfieldCode from '../../../preComponents/Input/textField/filledTextfields';
import FormattedInputCode from '../../../preComponents/Input/textField/formattedInputs';
import InputAdornmentCode from '../../../preComponents/Input/textField/InputAdorenment';
import InpuTextfieldCode from '../../../preComponents/Input/textField/inputTextfields';
import InputWithIconCode from '../../../preComponents/Input/textField/inputWithIcon';
import LayoutTextfieldCode from '../../../preComponents/Input/textField/layoutTextField';
import TextFieldCode from '../../../preComponents/Input/textField/textfields';
import OutlinedTextFieldsCode from '../../../preComponents/Input/textField/outlinedTextfields';
import OutlinedInputAdornmentsCode from '../../../preComponents/Input/textField/outlinedInputadorenmrnt';


class TextfieldExample extends Component {
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
                    <h1>TextField</h1>
                    <p className="text-justify">
                    Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
                    </p>
                    <div className="form-group">
                        <label><h3>Composed TextField</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ComposedTextFieldCode />
                        </Collapse>
                        <p className="text-justify">
                        TextField is composed of smaller components ( FormControl, Input, FilledInput, InputLabel,
                         OutlinedInput, and FormHelperText ) that you can leverage directly to significantly customize 
                         your form inputs.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ComposedTextField />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Customized Inputs</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomizedInputCode />
                        </Collapse>
                        <p className="text-justify">
                        Here are some examples of customizing the component. 
                        You can learn more about this in the overrides documentation page.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedInputs />
                        </div>
                        <p className="text-justify">
                        Customization does not stop at CSS, you can use composition to build custom components
                         and give your app a unique feel. Below is an example using the InputBase component, 
                         inspired by Google Maps.
                        </p>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Filled Input Adornments </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FilledInputAdornmentsCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FilledInputAdornments />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Filled TextFields</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FilledTextfieldCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FilledTextFields />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Formatted Input  </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FormattedInputCode />
                        </Collapse>
                        <p className="text-justify">
                        You can use third-party libraries to format an input. 
                        You have to provide a custom implementation of the element with the inputComponent property. 
                        The provided input component should handle the inputRef property. The property should be called with 
                        a value implementing the HTMLInputElement interface.
                            The following demo uses the react-text-mask and react-number-format libraries.
                    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FormattedInputs />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Input Adornments</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <InputAdornmentCode />
                        </Collapse>
                        <p className="text-justify">
                        Input allows the provision of InputAdornment. These can be used to add a prefix, 
                        a suffix or an action to an input. For instance, you can use an icon button to hide or reveal 
                        the password.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <InputAdornments />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Inputs </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <InpuTextfieldCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <Inputs />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Input With Icon</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <InputWithIconCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <InputWithIcon />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Outlined Input Adornments </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FilledTextfieldCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <OutlinedInputAdornments />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Outlined TextFields </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <OutlinedInputAdornmentsCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <OutlinedTextFields />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> TextFields </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <TextFieldCode />
                        </Collapse>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TextFields />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>TextField Margins</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <LayoutTextfieldCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TextFieldMargins />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextfieldExample;
