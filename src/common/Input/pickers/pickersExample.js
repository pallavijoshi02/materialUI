import React, { Component } from 'react';
import MaterialUIPickers from './controlledPickers';
import DateAndTimePickers from './dateAndTimePickers';
import DatePickers from './datePickers';
import TimePickers from './timePicker';



class PickerExample extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-sm-10 col-xs-10">
                    <div className="form-group">
                        <label className="bmd-label-floating">Basic Grid</label>
                        <MaterialUIPickers />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <DateAndTimePickers />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <DatePickers />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                       <TimePickers/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PickerExample;