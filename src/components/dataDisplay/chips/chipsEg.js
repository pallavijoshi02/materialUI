import React, { Component } from 'react';
import SimpleChips from './simpleChips';
import OutlinedChips from './outlinedChips';
import ChipsArray from './chipArray';
import SmallChips from './smallChips';
import SmallOutlinedChips from './smallOutlinedChips';

class ChipsEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Chips</h1>
                    <p className="text-justify">
                        Chips allow users to enter information, make selections, filter content, or trigger actions.
                        While included here as a standalone component, the most common use will be in some form of input,
                         so some of the behaviour demonstrated here is not shown in context.</p>

                     <div className="form-group">
                        <label><h3>Chip</h3></label>
                        <p className="text-justify">
                      Examples of Chips, using an image Avatar, SVG Icon Avatar, "Letter" and (string) Avatar.

                        Chips with the onClick property defined change appearance on focus, hover, and click.
                        Chips with the onDelete property defined will display a delete icon which changes appearance on hover.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                     <SimpleChips/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Outlined Chips</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <OutlinedChips/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Chip Array</h3></label>
                        <p className="text-justify">
                        An example of rendering multiple Chips from an array of values. Deleting a chip removes it 
                        from the array. Note that since no onClick property is defined, the Chip can be focused, but does not gain depth while clicked or touched.
                        </p>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <ChipsArray/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Small Chip</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <SmallChips/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Outlined Variant</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                       <SmallOutlinedChips/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChipsEg;