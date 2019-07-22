import React, { Component } from 'react';
import SimpleCollapse from './collapse';
import SimpleFade from './fade';
import SimpleGrow from './grow';
import SimpleSlide from './slide';
import SimpleZoom from './zoom';
import Collapse from '@material-ui/core/Collapse';
import CollapseCode from '../../../preComponents/utils/transition/collapse';
import FadeCode from '../../../preComponents/utils/transition/fade';
import SlideCode from '../../../preComponents/utils/transition/slide';
import ZoomCode from '../../../preComponents/utils/transition/zoom';
import GrowCode from '../../../preComponents/utils/transition/grow';


class TransitionEg extends Component {
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
                    <h1>Transition</h1>
                    <div className="form-group">
                        <label><h3>Collapse</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CollapseCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimpleCollapse/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Fade</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FadeCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SimpleFade/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Grow</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <GrowCode />
                        </Collapse>
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SlideCode />
                        </Collapse>
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ZoomCode />
                        </Collapse>
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