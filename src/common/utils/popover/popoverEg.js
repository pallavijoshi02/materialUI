import React, { Component } from 'react';
import SimplePopover from './simplePopover';
import MouseOverPopover from './mouseOverPopover';
import PopoverPopupState from './popoverPopupState';
import Collapse from '@material-ui/core/Collapse';
import SimplePopoverCode from '../../../preComponents/utils/popover/simplePopover';
import MouseOverPopoverCode from '../../../preComponents/utils/popover/mouseOverPopover';
import PopoverPopupStateCode from '../../../preComponents/utils/popover/popoverPopupState';

class PopoverEg extends Component {

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
                    <h1>Popover</h1>
                    <div className="form-group">
                        <label><h3>Simple Popover</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimplePopoverCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimplePopover/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Mouse over interaction</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MouseOverPopoverCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MouseOverPopover/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>PopupState helper</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <PopoverPopupStateCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <PopoverPopupState/>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default PopoverEg;