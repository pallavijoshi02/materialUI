import React, { Component } from 'react';
import SimpleExpansionPanel from './simplePanel';
import DetailedExpansionPanel from './detailedExapnsion';
import CustomizedExpansionPanels from './customizedPanel';
import ControlledExpansionPanels from './controlPanel';

class ExpansionPanel extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-sm-10 col-xs-10">
                    <div className="form-group">
                        <label className="bmd-label-floating">Basic Grid</label>
                        <SimpleExpansionPanel />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <DetailedExpansionPanel />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <CustomizedExpansionPanels />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <ControlledExpansionPanels />
                    </div>
                </div>

            </div>
        )
    }
}

export default ExpansionPanel;