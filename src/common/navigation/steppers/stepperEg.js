import React, { Component } from 'react';
import HorizontalLinearStepper from './horizontalLiner';
import HorizontalNonLinearStepper from './horizontalNonliner';
import HorizontalLabelPositionBelowStepper from './alternativeLabel';
import HorizontalNonLinearAlternativeLabelStepper from './nonlinerAlternativeLabel';
import HorizontalNonLinearStepperWithError from './errorStep';
import VerticalLinearStepper from './verticalStepper';
import CustomizedSteppers from './customizedStepper';
import TextMobileStepper from './mobileStepper';
import DotsMobileStepper from './mobileStepperDots';
import ProgressMobileStepper from './mobileStepperProgress';

class StepperEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Steppers</h1>
                    <p className="text-justify">
                    Steppers display progress through a sequence of logical and numbered steps.
                     They may also be used for navigation. Steppers may display a transient feedback message
                      after a step is saved.
                    </p>
                    <div className="form-group">
                        <label><h3> Horizontal Liner</h3></label>
                        <p className="text-justify">
                        The Stepper can be controlled by passing the current step index (zero-based)
                         as the activeStep property. Stepper orientation is set using the orientation property.

                            This example also shows the use of an optional step by placing the optional
                            property on the second Step component. Note that it's up to you to manage when an optional step is skipped. 
                            Once you've determined this for a particular step you must set completed={false} to signify that even though the 
                            active step index has gone beyond the optional step, it's not actually complete.
                         </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <HorizontalLinearStepper/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Horizontal Non-Liner </h3></label>
                        <p className="text-justify">
                        Non-linear steppers allow users to enter a multi-step flow at any point.

                        This example is similar to the regular horizontal stepper, except steps are no longer 
                        automatically set to disabled={true} based on the activeStep property.

                        We've used the StepButton here to demonstrate clickable step labels as well as setting the
                         completed flag however because steps can be accessed in a non-linear fashion it's up to 
                         your own implementation to determine when all steps are completed (or even if they need to 
                         be completed).
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <HorizontalNonLinearStepper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Horizontal Linear - Alternative Label</h3></label>
                        <p className="text-justify">
                        Labels can be placed below the step icon by setting the alternativeLabel property on the Stepper component.
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <HorizontalLabelPositionBelowStepper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Horizontal Non Linear - Alternative Label </h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <HorizontalNonLinearAlternativeLabelStepper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Horizontal Non Linear - Error Step</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <HorizontalNonLinearStepperWithError/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Vertical Stepper </h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <VerticalLinearStepper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized Stepper</h3></label>
                        <p className="text-justify">
                        Here is an example of customizing the component. You can learn more about this 
                        in the overrides documentation page.

                        This component uses a customized StepConnector element that changes 
                        border color based on the active and completed state.
                     </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <CustomizedSteppers/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Mobile Stepper </h3></label>
                        <p className="text-justify">
                        This component implements a compact stepper suitable for a mobile device. See mobile 
                        steps for its inspiration.

                        <h3>Mobile Stepper - Text</h3>
                        This is essentially a back/next button positioned correctly. You must implement the 
                        textual description yourself, however, an example is provided below for reference.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <TextMobileStepper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Button Size</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <DotsMobileStepper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Split Button </h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ProgressMobileStepper/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepperEg;



