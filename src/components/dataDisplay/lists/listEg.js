import React, { Component } from 'react';
import SimpleList from './simpleList';
import NestedList from './nestedList';
import FolderList from './folderList';
import InteractiveList from './interactiveList';
import SelectedListItem from './selectedListItem';
import AlignItemsList from './alignListItem';
import CheckboxList from './checkboxList';
import SwitchListSecondary from './switchList';
import PinnedSubheaderList from './pinnedSubheaderList';
import InsetList from './insetList';
import VirtualizedList from './virtualizedList';

class ListEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>List</h1>
                    <p className="text-justify">
                    Lists are a continuous group of text or images. They are composed of items containing primary 
                    and supplemental actions, which are represented by icons and text.
                        </p>
                    <div className="form-group">
                        <label><h3>Simple List</h3></label>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SimpleList/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Nested List</h3></label>
                          <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <NestedList/>
                            </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Align list items</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <AlignItemsList/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Checkbox List</h3></label>
                        <p className="text-justify">
                        A checkbox can either be a primary action or a secondary action.

                        The checkbox is the primary action and the state indicator for the list item.
                         The comment button is a secondary action and a separate target.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <CheckboxList/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Switch</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                       <SwitchListSecondary/>
                        </div>
                    </div>


                    <div className="form-group mt-5">
                        <label> <h3>Pinned Subheader List</h3></label>
                        <p className="text-justify">
                        Upon scrolling, subheaders remain pinned to the top of the screen until pushed off 
                        screen by the next subheader.

                        This feature is relying on the CSS sticky positioning. Unfortunately it's not 
                        implemented by all the browsers we are supporting. We default to disableSticky when not supported.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <PinnedSubheaderList/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Inset List</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <InsetList/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Virtualized List</h3></label>
                        <p className="text-justify">
                        In the following example, we demonstrate how to use react-window with the List component. 
                        It renders 200 rows and can easily handle more. Virtualization helps with performance issues.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                      <VirtualizedList/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Folder List</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <FolderList/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Interactive</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <InteractiveList/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Selected ListItem</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <SelectedListItem/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListEg;