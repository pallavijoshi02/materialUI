import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import BreakPointUp from './breakPointUp';
import BreakPointOnly from './breakPointOnly';
import BreakPointDown from './breakPointDown';
import BreakPointUpCode from './breakPointUp';
import BreakPointOnlyCode from './breakPointOnly';
import BreakPointDownCode from './breakPointDown';


class Hidden extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    showClick() {
        this.setState({
            checked: !this.state.checked
        })
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <BreakPointUpCode />
                        </Collapse>
                        <p className="text-justify">
                            Using any breakpoint up property, the given children will be hidden at or above the breakpoint.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <BreakPointUp />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3> Break Point Only </h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <BreakPointOnlyCode />
                        </Collapse>
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <BreakPointDownCode />
                        </Collapse>
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
