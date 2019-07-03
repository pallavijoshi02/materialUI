import React, { Component } from 'react';
import SimpleListMenu from './selectedMenu';
import SimpleMenu from './simpleMenu';
import MenuListComposition from './menuListComposition';
import CustomizedMenus from './customizedMenu';
import FadeMenu from './changeTransition';
import TypographyMenu from './limitationMenu';
import LongMenu from './maxHeightgMenu';


class MenuEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Menu</h1>
                    <div className="form-group">
                        <label><h3> Simple Menu</h3></label>
                        <p className="text-justify">
                            Simple menus open over the anchor element by default (this option can be changed via props).
                             When close to a screen edge,
                             simple menus vertically realign to make sure that all menu items are completely visible.
                             Choosing an option should immediately ideally commit the option and close the menu.

                             Disambiguation: In contrast to simple menus, simple dialogs can present additional detail
                              related to the options available for a list item or provide navigational or orthogonal actions related
                               to the primary task. Although they can display the same content, simple menus are preferred over
                                simple dialogs because simple menus are less disruptive to the user’s current context.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "50px" }}>
                            <SimpleMenu />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Selected Menu</h3></label>
                        <p className="text-justify">
                            If used for item selection, when opened, simple menus attempt to vertically align the currently
                            selected menu item with the anchor element, and the initial focus will be placed on the selected
                             menu item. The currently selected menu item is set using the selected property (from ListItem).
                             To use a selected menu item without impacting the initial focus or the vertical positioning of the
                              menu, set the variant property to menu.    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleListMenu />
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>MenuList composition</h3></label>
                        <p className="text-justify">
                            The Menu component uses the Popover component internally. However,
                            you might want to use a different positioning strategy, or not blocking the scroll.
                            For answering those needs, we expose a MenuList component that you can compose, with Popper
                            in this example.

                        The primary responsibility of the MenuList component is to handle the focus.   </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <MenuListComposition />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized menus</h3></label>
                        <p className="text-justify">
                            If used for item selection, when opened, simple menus attempt to vertically align the currently
                            selected menu item with the anchor element, and the initial focus will be placed on the selected
                             menu item. The currently selected menu item is set using the selected property (from ListItem).
                             To use a selected menu item without impacting the initial focus or the vertical positioning of the
                              menu, set the variant property to menu.    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedMenus />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Changed Transitions</h3></label>
                        <p className="text-justify">
                            Use a different transition.
                         </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FadeMenu />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Limitation Menu </h3></label>
                        <p className="text-justify">
                            There is a flexbox bug that prevents text-overflow: ellipsis from working in a flexbox layout.
                             You can use the Typography component with noWrap to workaround this issue:
                         </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TypographyMenu/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Max Height Menu </h3></label>
                        <p className="text-justify">
                        If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.
                         </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <LongMenu/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuEg;