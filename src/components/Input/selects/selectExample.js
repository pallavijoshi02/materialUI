import React, { Component } from 'react';
import ControlledOpenSelect from './controlledOpenSelect';
import CustomizedSelects from './customizedSelects';
import DialogSelect from './dialougeSelect';
import MultipleSelect from './multipleSelect';
import SimpleSelect from './simpleSelect';
import NativeSelects from './nativeSelect';


class selectExample extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-sm-10 col-xs-10">
                    <div className="form-group">
                        <label className="bmd-label-floating">Basic Grid</label>
                        <ControlledOpenSelect />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <CustomizedSelects />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <DialogSelect />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <MultipleSelect />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                     <NativeSelects/>
                    </div>
                </div>


                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <SimpleSelect />
                    </div>
                </div>
            </div>
        )
    }
}

export default selectExample;