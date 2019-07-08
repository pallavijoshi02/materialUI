import React, { Component } from 'react';
import GridExample from './basicGrid';
import SpacingGrid from './spacingGrid'
import GridBreakPoints from './gridBreakPoints';
import AutoGrid from './autoGrid';
import ComplexGrid from './complexGrid';
import NestedGrid from './nestedGrid';
import BasicGridCode from '../../../preComponents/layout/grid/basicGrid';


class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false
        }
    }

     showClick(){
        this.setState({
            show:!this.state.show
        })
     }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Grid</h1>
                    <p className="text-justify">
                        The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs.
                        Material Design’s responsive UI is based on a 12-column grid layout.

                       <h3> How it works</h3>
                        The grid system is implemented with the Grid component: <br />

                        1. It uses CSS’s Flexible Box module for high flexibility. <br />
                        2. There are two types of layout: containers and items.<br />
                        3. Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.<br />
                        4. Items have padding to create the spacing between individual items.<br />
                        5. There are five grid breakpoints: xs, sm, md, lg, and xl.<br /> <br />

                        If you are new to or unfamiliar with flexbox, we encourage you to read this CSS-Tricks flexbox guide.<br />
                    </p>

                    <div className="form-group">
                        <label><h3> Basic Grid</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                        </svg>
                        </button>
                        <div className={!this.state.show ?'hidden':''}>
                            <BasicGridCode/>
                        </div>
                        <p className="text-justify">
                            The column widths apply at all breakpoints (i.e. xs and up).
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <GridExample />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3> Spacing Grid</h3></label>
                        <p className="text-justify">
                            The responsive grid focuses on consistent spacing widths, rather than column width.
                             Material Design margins and columns follow an 8px square baseline grid. The spacing property
                             is an integer between
                             0 and 10 inclusive. By default, the spacing between two grid items follows a linear function:
                         output(spacing) = spacing * 8px, e.g. spacing={2} creates a 16px wide gap.
   
                            This output transformation function can be customized using the theme.    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SpacingGrid />
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Grid Break Points</h3></label>
                        <p className="text-justify">
                            Some columns have multiple widths defined, causing the layout to change at the defined breakpoint.
                           </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <GridBreakPoints />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Auto Layout Grid</h3></label>
                        <p className="text-justify">
                            The Auto-layout makes the items equitably share the available space. That also means you can set
                        the width of one item and the others will automatically resize around it. </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <AutoGrid />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Complex Grid</h3></label>
                        <p className="text-justify">
                            The following demo doesn't follow the Material Design specification, but illustrates
                             how the grid can be used to build complex layouts.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ComplexGrid />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Nested Grid </h3></label>
                        <p className="text-justify">
                            The container and item properties are two independent booleans. They can be combined.
    
                            A flex container is the box generated by an element with a computed display of flex or inline-flex.
                            In-flow children of a flex container are called flex items and are laid out using the flex layout model
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <NestedGrid />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Grid;
