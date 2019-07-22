import React, { Component } from 'react';
import Types from './types';
import TypographyTheme from './typograpghyTheme';


class TypoEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Typography</h1>
                    <div className="form-group">
                        <label><h3>Component</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <Types/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Theme</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <TypographyTheme/>
                        </div>
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default TypoEg;