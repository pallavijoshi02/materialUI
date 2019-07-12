import React, { Component } from 'react';
import ControlledTooltips from './controlledToolTip';
import CustomizedTooltips from './customizedToolTip';
import DelayTooltips from './delayToolTip';

class Grid extends Component {
    render() {
        return (
            <div className="row">
                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating">Basic Grid</label>
                           <ControlledTooltips/>
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> spacing Grid</label>
                            <CustomizedTooltips/>
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Grid With BreakPoints</label>
                            <DelayTooltips/>
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Auto Grid</label>
                            <AutoGrid />
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Complex Grid</label>
                            <ComplexGrid />
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Nested Grid</label>
                            <NestedGrid />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Grid;