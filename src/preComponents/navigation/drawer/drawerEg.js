import React, { Component } from 'react';
import ClippedDrawer from './clippedDrawer';
import MiniDrawer from './miniDrawer';
import PermanentDrawerLeft from './permanentDrawer';
import PersistentDrawerLeft from './persistantDrawer';
import ResponsiveDrawer from './responsiveDrawer';
import SwipeableTemporaryDrawer from './swipeDrawer';
import TemporaryDrawer from './tempDrawer';


class DrawerEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Drawer</h1>
                    <p className="text-justify">
                        Navigation drawers provide access to destinations in your app. 
                        Side sheets are surfaces containing supplementary content that are anchored to the left or right edge 
                        of the screen.
                    </p>
                    <div className="form-group">
                        <label><h3>Collapsed Breadcrumbs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ClippedDrawer />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Customized Breadcrumbs</h3></label>
                        <p>
                        In this variation, the persistent navigation drawer changes its width. 
                        Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar. 
                        When expanded, it appears as the standard persistent navigation drawer.

                        The mini variant is recommended for apps sections that need quick selection access alongside content.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <MiniDrawer />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Permanent DrawerLeft</h3></label>
                        <p className="text-justify">
                        Permanent navigation drawers are always visible and pinned to the left edge,
                         at the same elevation as the content or background. They cannot be closed.

                            Permanent navigation drawers are the recommended default for desktop.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <PermanentDrawerLeft />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Persistent DrawerLeft</h3></label>
                        <p>
                        Persistent navigation drawers can toggle open or closed. 
                        The drawer sits on the same surface elevation as the content. 
                        It is closed by default and opens by selecting the menu icon, 
                        and stays open until closed by the user. The state of the drawer is remembered from action to action
                         and session to session.

                        When the drawer is outside of the page grid and opens, the drawer forces other content 
                        to change size and adapt to the smaller viewport.

                        Persistent navigation drawers are acceptable for all sizes larger than mobile. 
                        They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <PersistentDrawerLeft />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Responsive Drawer</h3></label>
                        <p>
                        The Hidden responsive helper component allows showing different types of 
                        drawer depending on the screen width. A temporary drawer is shown for small screens while a 
                        permanent drawer is shown for wider screens.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ResponsiveDrawer />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Swipeable Temporary Drawer</h3></label>
                        <p>
                        You can make the drawer swipeable with the SwipeableDrawer component.
                        This component comes with a 2 kB gzipped payload overhead. 
                        Some low-end mobile devices won't be able to follow the fingers at 60 FPS. 
                        You can use the disableBackdropTransition property to help.
                        </p>

                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SwipeableTemporaryDrawer />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Temporary Drawer</h3></label>
                        <p>
                        Temporary navigation drawers can toggle open or closed. Closed by default, 
                        the drawer opens temporarily above all other content until a section is selected.

                        The Drawer can be cancelled by clicking the overlay or pressing the Esc key. 
                        It closes when an item is selected, handled by controlling the open prop.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TemporaryDrawer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrawerEg;
