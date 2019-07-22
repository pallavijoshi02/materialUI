import React, { Component } from 'react';
import MinimalPopper from './minimalPopper';
import PositionedPopper from './positionedPopper';
import NoTransitionPopper from './noTransitionpopper';
import FakedReferencePopper from './fakedRefrencePropper';
import SimplePopper from './simplePopper';
import PopperPopupState from './popperPopupState';
import Collapse from '@material-ui/core/Collapse';
import SimplePopperCode from '../../../preComponents/utils/popper/simplePopper';
import MinimalPopperCode from '../../../preComponents/utils/popper/minimalPopper';
import PosotionedPopperCode from '../../../preComponents/utils/popper/positionedPopper';
import NoTransitionPopperCode from '../../../preComponents/utils/popper/noTransitionpopper';
import FakedReferencePopperCode from '../../../preComponents/utils/popper/fakedRefrencePropper';
import PopperPopupStateCodes from '../../../preComponents/utils/popper/popperPopupState';


class PopperEg extends Component {
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
                    <h1>Popper</h1>
                    <div className="form-group">
                        <label><h3>Simple Popper</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimplePopperCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimplePopper/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Minimalist Popper</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MinimalPopperCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MinimalPopper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Positioned Popper</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <PosotionedPopperCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <PositionedPopper/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Without transition Popper</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <NoTransitionPopperCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <NoTransitionPopper/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Faked reference object</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FakedReferencePopperCode />
                        </Collapse>
                        <p className="text-justify"> 
                        The anchorEl property can be a reference to a fake DOM element. You just need to create an object shaped like the ReferenceObject.

                        Highlight part of the text to see the popper:
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <FakedReferencePopper/>
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
                            <PopperPopupStateCodes />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <PopperPopupState/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopperEg;