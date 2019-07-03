import React, { Component } from 'react';
import ListDividers from './listDivider';
import InsetDividers from './insetDivider';
import SubheaderDividers from './subHeaderDivider';
import MiddleDividers from './middleDivider';

class DividerEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Dividers</h1>
                    <div className="form-group">
                        <label><h3>List Dividers</h3></label>
                        <p className="text-justify">
                            The divider renders as a by default.
                             You can save rendering this DOM element by using the divider property on the ListItem component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ListDividers />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Inset Dividers</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <InsetDividers/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Subheader Dividers</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SubheaderDividers/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Middle Dividers</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MiddleDividers/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DividerEg;