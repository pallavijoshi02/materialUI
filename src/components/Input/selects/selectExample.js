import React, { Component } from 'react';
import ControlledOpenSelect from './controlledOpenSelect';
import CustomizedSelects from './customizedSelects';
import DialogSelect from './dialougeSelect';
import MultipleSelect from './multipleSelect';
import SimpleSelect from './simpleSelect';
import NativeSelects from './nativeSelect';

class SelectExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ControlledOpenSelect />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Customized Select</h3></label>
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
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DialogSelect />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Multiple Select</h3></label>
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
                        <p className="text-justify">
                            Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleSelect />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Native Select </h3></label>
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
