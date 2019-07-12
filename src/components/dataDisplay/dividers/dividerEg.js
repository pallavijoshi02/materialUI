import React, { Component } from 'react';
import ListDividers from './listDivider';
import InsetDividers from './insetDivider';
import SubheaderDividers from './subHeaderDivider';
import Collapse from '@material-ui/core/Collapse';
import MiddleDividers from './middleDivider';
import ListDividerCode from '../../../preComponents/dataDisplay/dividers/listDivider';
import InsetDividerCode from '../../../preComponents/dataDisplay/dividers/insetDivider';
import SubHeaderDividerCode from '../../../preComponents/dataDisplay/dividers/subHeaderDivider';
import MiddleDividerCode from '../../../preComponents/dataDisplay/dividers/middleDivider';

class DividerEg extends Component {
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
                    <h1>Dividers</h1>
                    <div className="form-group">
                        <label><h3>List Dividers</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ListDividerCode />
                        </Collapse>
                        <p className="text-justify">
                            The divider renders as a by default.
                             You can save rendering this DOM element by using the divider property on the ListItem component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ListDividers />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Inset Dividers</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <InsetDividerCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <InsetDividers/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Subheader Dividers</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SubHeaderDividerCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SubheaderDividers/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Middle Dividers</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MiddleDividerCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MiddleDividers/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DividerEg;