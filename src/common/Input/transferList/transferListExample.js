import React, { Component } from 'react';
import TransferList from './simpleTransferList';
import EnhancedTransferList from './enhancedTransferList';
import Collapse from '@material-ui/core/Collapse';
import EnhancedTransferListCode from '../../../preComponents/Input/transferList/enhancedTransferList';
import SimpleTransferListCode from '../../../preComponents/Input/transferList/simpleTransferList';

class TransferListExample extends Component {
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
                    <h1>Transfer List</h1>
                    <div className="form-group">
                        <label><h3>Simple TransferList</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleTransferListCode />
                        </Collapse>
                        <p className="text-justify">
                        For completeness, this example includes buttons for "move all", but not every transfer list needs these.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TransferList />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Enhanced TransferList</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <EnhancedTransferListCode />
                        </Collapse>
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
