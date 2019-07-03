import React, { Component } from 'react';
import TransferList from './simpleTransferList';
import EnhancedTransferList from './enhancedTransferList';

class TransferListExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Transfer List</h1>
                    <div className="form-group">
                        <label><h3>Simple TransferList</h3></label>
                        <p className="text-justify">
                        For completeness, this example includes buttons for "move all", but not every transfer list needs these.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TransferList />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Enhanced TransferList</h3></label>
                        <p className="text-justify">
                        This example exchanges the "move all" buttons for a "select all / select none" checkbox, and adds a counter.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <EnhancedTransferList />
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default TransferListExample;
