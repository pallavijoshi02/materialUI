import React, { Component } from 'react';
import CircularIndeterminate from './circularIndeterminate';
import CircularDeterminate from './circularDeterminate';
import LinearProgress from './linerProgress'
import LinearDeterminate from './linerDeterminate';
import LinearBuffer from './linerBuffer';
import CustomizedProgressBars from './customizedProgressBar';
import DelayingAppearance from './delayingApperance';
import LinearQuery from './linerQuery';
import CircularStatic from './circularStatic';
import CircularIntegration from './interactiveIntegration';

class ProgressEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Progress</h1>
                    <p className="text-justify">
                    Progress indicators inform users about the status of ongoing processes, 
                    such as loading an app, submitting a form, or saving updates. 
                    They communicate an app’s state and indicate available actions, such as whether users can 
                    navigate away from the current screen.
                 </p>
                    <div className="form-group">
                        <label><h3>Circular</h3></label>
                        <p className="text-justify">
                        Circular progress support both determinate and indeterminate processes.

                        Determinate circular indicators fill the invisible, circular track with color, 
                        as the indicator moves from 0 to 360 degrees.
                        Indeterminate circular indicators grow and shrink in size while moving along the invisible track.

                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <CircularIndeterminate/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Interactive Integration</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <CircularIntegration/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Circular Determinate</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CircularDeterminate/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Circular Static</h3></label>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <CircularStatic/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Liner Ineterminate</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <LinearProgress/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Liner Determinate</h3></label>
                      <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <LinearDeterminate/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Liner Query</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <LinearQuery/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Liner Buffer</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <LinearBuffer/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Customized Progress Bar</h3></label>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedProgressBars/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Delaying Apperance</h3></label>
                        <p className="text-justify">
                        There are 3 important limits to know around response time.
                         The ripple effect of the ButtonBase component ensures that the user feels that 
                         the system is reacting instantaneously. Normally, no special feedback is necessary during 
                         delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display 
                         a loader to keep user's flow of thought uninterrupted.
                    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <DelayingAppearance/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressEg;