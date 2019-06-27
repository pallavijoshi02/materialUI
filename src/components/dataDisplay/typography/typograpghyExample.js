import React, { Component } from 'react';
import Types from './types';
import TypographyTheme from './typograpghyTheme';


class TypographyExample extends Component {
    render() {
        return (
            <div className="row">
                {/* <div className="container"> */}
                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating">Basic Grid</label>
                            <Types/>
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> spacing Grid</label>
                         <TypographyTheme/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default TypographyExample;