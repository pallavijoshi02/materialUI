import React, { Component } from 'react';
import ButtonBases from './complexButtons'
import ContainedButtons from './containedButton';
import CustomizedButtons from './customizedButton';
import FloatingActionButtonZoom from './floatingButton';
import GroupedButtons from './groupButton';
import IconButtons from './IconButton';
import IconLabelButtons from './IconLabelButton';
import OutlinedButtons from './outlinedButtons';
import ButtonSizes from './sizeButton';
import SplitButton from './splitButton';
import TextButtons from './textButtons';



class buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Buttons</h1>
                    <p className="text-justify">
                        Buttons allow users to take actions, and make choices, with a single tap.
                    </p>
                    <div className="form-group">
                        <label><h3> Complex Buttons</h3></label>
                        <p className="text-justify">
                            The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built
                            on top of the same component: the ButtonBase. You can take advantage of this lower level
                           component to build custom interactions.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ButtonBases />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Contained Button </h3></label>
                        <p className="text-justify">
                            Contained buttons are high-emphasis,
                            distinguished by their use of elevation and fill. They contain actions that are primary to your app.
                              The last example of this demo show how to use an upload button.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ContainedButtons />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized Buttons</h3></label>
                        <p className="text-justify">
                            In the following example, we demonstrate how to use react-autosuggest.
                             It's also using autosuggest-highlight for the highlighting logic.
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedButtons />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Floating Action Button </h3></label>
                        <p className="text-justify">
                            A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended.
    
                            Only use a FAB if it is the most suitable way to present a screen’s primary action.
    
                            Only one floating action button is recommended per screen to represent the most common action.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FloatingActionButtonZoom />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Group Buttons</h3></label>
                        <p className="text-justify">
                            The ButtonGroup component can be used to group outlined (the default) or contained butto
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <GroupedButtons />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Icon Button </h3></label>
                        <p className="text-justify">
                            Icon buttons are commonly found in app bars and toolbars.
    
                            Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected,
                             such as adding or removing a star to an item.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IconButtons />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Icon With Button Label</h3></label>
                        <p className="text-justify">
                            Sometimes you might want to have icons for certain button to enhance the UX of the application
                            as we recognize logos more easily than plain text. For example, if you have a delete button you
                            can label it with a dustbin icon.
    
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IconLabelButtons />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Outlined Button </h3></label>
                        <p className="text-justify">
                            Outlined buttons are also a lower emphasis alternative to contained buttons,
                            or a higher emphasis alternative to text buttons.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <OutlinedButtons />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Button Size</h3></label>
                        <p className="text-justify">
                            Fancy larger or smaller buttons? Use the size property.
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ButtonSizes />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Split Button </h3></label>
                        <p className="text-justify">
                            ButtonGroup can also be used to create a split button.
                            The dropdown can change the button action (as in this example), or be use to immediately
                            trigger a related act
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SplitButton />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Text Button</h3></label>
                        <p className="text-justify">
                            Text buttons are typically used for less-pronounced actions, including those located:
    
                                In dialogs
                                In cards
                                In cards, text buttons help maintain an emphasis on card content.
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TextButtons />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default buttons;



