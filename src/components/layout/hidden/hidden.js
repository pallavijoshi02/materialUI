import React, { Component } from 'react';
import BreakPointUp from './breakPointUp';
import BreakPointOnly from './breakPointOnly';
import BreakPointDown from './breakPointDown';

class Hidden extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating">BreakPoint Up</label>
                        <BreakPointUp />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> BreakPoint Only</label>
                        <BreakPointOnly />
                    </div>
                </div>
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> BreakPoint Down</label>
                        <BreakPointDown />
                    </div>
                </div>
            </div>
        )
    }
}

export default Hidden;