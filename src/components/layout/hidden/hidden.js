import React, { Component } from 'react';
import BreakPointUp from './breakPointUp';
import BreakPointOnly from './breakPointOnly';
import BreakPointDown from './breakPointDown';


class Hidden extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Hidden</h1>
                    <p className="text-justify">
                        All elements are visible unless they are explicitly hidden. To ease integration with Material-UI's
                        responsive breakpoints, this component can be used to hide any content,
                         or you can use it in conjunction with our Grid component.


                    </p>

                    <div className="form-group">
                        <label><h3> Break Point Up</h3></label>
                        <p className="text-justify">
                            Using any breakpoint up property, the given children will be hidden at or above the breakpoint.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <BreakPointUp />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3> Break Point Only </h3></label>
                        <p className="text-justify">Using the breakpoint only property, the given children will be hidden at the specified breakpoint(s).

                                The only property can be used in two ways:

                              1. list a single breakpoint.
                              2. list an array of breakpoints.
                                </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <BreakPointOnly />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Break Point Down</h3></label>
                        <p className="text-justify">
                            Using any breakpoint down property, the given children will be hidden at or below the breakpoint.
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <BreakPointDown />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hidden;
