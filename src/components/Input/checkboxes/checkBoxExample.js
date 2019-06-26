import React, { Component } from 'react';
import Checkboxes from './checkbox';
import CheckboxesGroup from './checkboxesGroup';
import CheckboxLabels from './formControlLabel';
import FormControlLabelPosition from './labelPlacement';



class CheckboxExample extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-sm-10 col-xs-10">
                    <div className="form-group">
                        <label className="bmd-label-floating">CheckBoxes</label>
                        <Checkboxes />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <CheckboxesGroup />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <CheckboxLabels />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <FormControlLabelPosition />
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckboxExample;