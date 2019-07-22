import React, { Component } from 'react';
import SimpleChips from './simpleChips';
import OutlinedChips from './outlinedChips';
import ChipsArray from './chipArray';
import SmallChips from './smallChips';
import Collapse from '@material-ui/core/Collapse';
import SmallOutlinedChips from './smallOutlinedChips';
import SimpleChipsCode from '../../../preComponents/dataDisplay/chips/simpleChips';
import OutlinedChipCode from '../../../preComponents/dataDisplay/chips/outlinedChips';
import ChipArrayCode from '../../../preComponents/dataDisplay/chips/chipArray';
import SmallChipsCode from '../../../preComponents/dataDisplay/chips/smallChips';
import SmallOutlinedChipsCode from '../../../preComponents/dataDisplay/chips/smallOutlinedChips';

class ChipsEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked:false
        }
    }

    showClick(){
        this.setState({
                checked:!this.state.checked
        })
    }

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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleChipsCode />
                        </Collapse>
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <OutlinedChipCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <OutlinedChips/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Chip Array</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ChipArrayCode />
                        </Collapse>
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SmallChipsCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <SmallChips/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Outlined Variant</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SmallOutlinedChipsCode />
                        </Collapse>
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