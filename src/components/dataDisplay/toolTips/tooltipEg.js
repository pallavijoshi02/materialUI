import React, { Component } from 'react';
import SimpleTooltips from './simpleToolTip';
import PositionedTooltips from './positionedToolTip';
import CustomizedTooltips from './customizedToolTip';
import TriggersTooltips from './triggerToolTip';
import ControlledTooltips from './controlledToolTip';
import VariableWidth from './variableWidth';
import InteractiveTooltips from './interactiveToolTip';
import DisabledTooltips from './disableToolTip';
import TransitionsTooltips from './transition';
import DelayTooltips from './delayToolTip';


class TooltipEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Tooltips</h1>
                    <div className="form-group">
                        <label><h3>Simple Tooltips</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleTooltips />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Positioned Tooltips</h3></label>
                        <p className="text-justify">
                            The Tooltip has 12 placements choice. They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <PositionedTooltips />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized tooltips</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedTooltips />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Triggers</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TriggersTooltips />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Controlled Tooltips</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ControlledTooltips />
                        </div>
                    </div>


                    <div className="form-group mt-5">
                        <label> <h3>Variable Width</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <VariableWidth />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Interactive</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <InteractiveTooltips />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Disabled Elements</h3></label>
                        <p className="text-justify">
                            By default disabled elements like do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element like a span.

                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DisabledTooltips />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Transitions</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TransitionsTooltips />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Showing and hiding</h3></label>
                        <p className="text-justify">
                            The tooltip is normally shown immediately when the user's mouse hovers over the element, and hides immediately when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the properties enterDelay and leaveDelay, as shown in the Controlled Tooltips demo above.

                            On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the disableTouchListener property.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DelayTooltips />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TooltipEg;