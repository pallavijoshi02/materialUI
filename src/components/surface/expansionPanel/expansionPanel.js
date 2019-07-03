import React, { Component } from 'react';
import SimpleExpansionPanel from './simplePanel';
import DetailedExpansionPanel from './detailedExapnsion';
import CustomizedExpansionPanels from './customizedPanel';
import ControlledExpansionPanels from './controlPanel';

class ExpansionPanel extends Component {
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
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleExpansionPanel />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Controlled Accordion</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ControlledExpansionPanels />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Secondary heading and Columns</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DetailedExpansionPanel />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized expansion panels</h3></label>
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