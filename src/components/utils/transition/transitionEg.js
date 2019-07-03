import React, { Component } from 'react';
import SimpleCollapse from './collapse';
import SimpleFade from './fade';
import SimpleGrow from './grow';
import SimpleSlide from './slide';
import SimpleZoom from './zoom';


class TransitionEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Transition</h1>
                    <div className="form-group">
                        <label><h3>Collapse</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimpleCollapse/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Fade</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SimpleFade/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Grow</h3></label>
                        <p className="text-justify">
                        Expand outwards from the center of the child element, while also fading in from transparent to opaque.

                        The second example demonstrates how to change the transform-origin, and conditionally applies the timeout property to change the entry speed.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SimpleGrow/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Slide</h3></label>
                        <p className="text-justify">
                        Slide in from the edge of the screen. The direction property controls which edge of the screen the transition starts from.

                        The Transition component's mountOnEnter property prevents the child component from being mounted until in is true. This prevents the relatively positioned component from scrolling into view from it's off-screen position. Similarly the unmountOnExit property removes the component from the DOM after it has been transition off screen.
                        </p>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SimpleSlide/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Zoom</h3></label>
                        <p className="text-justify"> 
                        Expand outwards from the center of the child element.

                        This example also demonstrates how to delay the enter transition.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SimpleZoom/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransitionEg;