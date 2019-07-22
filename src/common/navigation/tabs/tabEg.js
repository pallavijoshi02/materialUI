import React, { Component } from 'react';
import SimpleTabs from './simpleTabs';
import TabsWrappedLabel from './tabsWrappedLabel';
import DisabledTabs from './disabledTab';
import FullWidthTabs from './fullWidthTab';
import CenteredTabs from './centeredTab';
import ScrollableTabsButtonForce from './forcedScrollTab';
import ScrollableTabsButtonPrevent from './preventScrollTab';
import CustomizedTabs from './customizedTab';
import IconLabelTabs from './iconTabs';
import NavTabs from './navTabs';

class TabEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Tabs</h1>
                    <p className="text-justify">
                    Tabs make it easy to explore and switch between different views.
                  </p>
                    <div className="form-group">
                        <label><h3>Simple Tabs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <SimpleTabs/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Tabs Wrapped Label</h3></label>
                        <p className="text-justify">
                        Long labels will automatically wrap on tabs. If the label is too long for the tab, 
                        it will overflow and the text will not be visible.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <TabsWrappedLabel/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Disable tab</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <DisabledTabs/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Full Width Tab</h3></label>
                        <p className="text-justify">
                        The variant="fullWidth" property should be used for smaller views. 
                        This demo also uses react-swipeable-views to animate the Tab transition,
                         and allowing tabs to be swiped on touch devices.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <FullWidthTabs/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Centered Tab</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <CenteredTabs/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Forced Scroll Tab</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <ScrollableTabsButtonForce/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Prevent Scroll Tabs</h3></label>
                        <p className="text-justify">
                        Left and right scroll buttons will never be presented. 
                        All scrolling must be initiated through user agent scrolling mechanisms
                         (e.g. left/right swipe, shift-mousewheel, etc.)
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ScrollableTabsButtonPrevent/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized tab</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <CustomizedTabs/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Nav Tabs</h3></label>
                        <p className="text-justify">
                        By default tabs use a button element, but you can provide your own custom tag or component.
                         Here's an example of implementing tabbed navigation:
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                       <NavTabs/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Icon Tabs</h3></label>
                      <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <IconLabelTabs/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TabEg;



