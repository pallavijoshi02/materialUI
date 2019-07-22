import React, { Component } from 'react';
import SimpleExpansionPanel from './simplePanel';
import DetailedExpansionPanel from './detailedExapnsion';
import CustomizedExpansionPanels from './customizedPanel';
import ControlledExpansionPanels from './controlPanel';
import Collapse from '@material-ui/core/Collapse';
import SimplePanelCode from '../../../preComponents/surface/expansionPanel/simplePanel';
import ControlPanelCode from '../../../preComponents/surface/expansionPanel/controlPanel';
import DetailedExpansionCode from '../../../preComponents/surface/expansionPanel/detailedExapnsion';
import CustomizedPanelCode from '../../../preComponents/surface/expansionPanel/customizedPanel';

class ExpansionPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    showClick() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Expansion Panel</h1>
                    <p className="text-justify">
                        An expansion panel is a lightweight container that may either stand alone or be
                        connected to a larger surface, such as a card.
                 </p>
                    <div className="form-group">
                        <label><h3>Simple Expansion Panel</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimplePanelCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleExpansionPanel />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Controlled Accordion</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ControlPanelCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ControlledExpansionPanels />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Secondary heading and Columns</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <DetailedExpansionCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DetailedExpansionPanel />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized expansion panels</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomizedPanelCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedExpansionPanels />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpansionPanel;