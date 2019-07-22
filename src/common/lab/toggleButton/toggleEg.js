import React, { Component } from 'react';
import ToggleButtons from './toggleButtonGroup';
import ToggleButtonSizes from './toggleButtonSize';
import Collapse from '@material-ui/core/Collapse';
import ToggleButtonGroupCode from '../../../preComponents/lab/toggleButton/toggleButtonGroup';
import ToggleButtonSizeCode from '../../../preComponents/lab/toggleButton/toggleButtonSize';


class ToggleEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked:false
        }
    }

    showClick(){
        this.setState({
                checked:!this.state.checked
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Toggle Buttons</h1>
                    <div className="form-group">
                        <label><h3>Toggle Button</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ToggleButtonGroupCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <ToggleButtons/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Button Size</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ToggleButtonSizeCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ToggleButtonSizes/>
                        </div>
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default ToggleEg;