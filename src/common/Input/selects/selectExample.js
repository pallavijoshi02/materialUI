import React, { Component } from 'react';
import ControlledOpenSelect from './controlledOpenSelect';
import CustomizedSelects from './customizedSelects';
import DialogSelect from './dialougeSelect';
import MultipleSelect from './multipleSelect';
import SimpleSelect from './simpleSelect';
import NativeSelects from './nativeSelect';
import Collapse from '@material-ui/core/Collapse';
import ControlledOpenSelectCode from '../../../preComponents/Input/selects/controlledOpenSelect';
import CustomizedSelectCode from '../../../preComponents/Input/selects/customizedSelects';
import DialogueSelectCode from '../../../preComponents/Input/selects/dialougeSelect';
import MultipleSelectCode from '../../../preComponents/Input/selects/multipleSelect';
import NativeSelectCode from '../../../preComponents/Input/selects/nativeSelect';
import SimpleSelectCode from '../../../preComponents/Input/selects/simpleSelect';

class SelectExample extends Component {
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
                    <h1>Select</h1>
                    <p className="text-justify">
                        Select components are used for collecting user provided information from a list of options.
                    </p>
                    <div className="form-group">
                        <label><h3>Controlled Open Select</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ControlledOpenSelectCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ControlledOpenSelect />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Customized Select</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomizedSelectCode />
                        </Collapse>
                        <p className="text-justify">
                            Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.
    
                            The first step is to style the InputBase component. Once it's styled, you can either
                            use it directly as a text field or provide it to the select input property to have a select field.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedSelects />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Dialog Select </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <DialogueSelectCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DialogSelect />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Multiple Select</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MultipleSelectCode />
                        </Collapse>
                        <p className="text-justify">
                            The Select component can handle multiple selections. It's enabled with the multiple property.
    
                            Like with the single selection, you can pull out the new value by accessing event.target.value
                            in the onChange callback. It's always an array.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <MultipleSelect />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Simple Select</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleSelectCode />
                        </Collapse>
                        <p className="text-justify">
                            Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleSelect />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Native Select </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <NativeSelectCode />
                        </Collapse>
                        <p className="text-justify">
                            As the user experience can be improved on mobile using the native select of the platform, we allow such pattern.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <NativeSelects />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectExample;
