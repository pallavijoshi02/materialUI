import React, { Component } from 'react';
import MinimalPopper from './minimalPopper';
import PositionedPopper from './positionedPopper';
import NoTransitionPopper from './noTransitionpopper';
import FakedReferencePopper from './fakedRefrencePropper';
import SimplePopper from './simplePopper';
import PopperPopupState from './popperPopupState';


class PopperEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Popper</h1>
                    <div className="form-group">
                        <label><h3>Simple Popper</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimplePopper/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Minimalist Popper</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MinimalPopper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Positioned Popper</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <PositionedPopper/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Without transition Popper</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <NoTransitionPopper/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Faked reference object</h3></label>
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