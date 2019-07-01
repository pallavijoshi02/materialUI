import React, { Component } from 'react';
import TransferList from './simpleTransferList';
import EnhancedTransferList from './enhancedTransferList';

class TransferListExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            simpleList: false,
            enhancedList: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'simpleList') {
            this.setState({
                simpleList: !this.state.simpleList,
                enhancedList: false,
            })
        }
        else if (event.target.name === 'enhancedList') {
            this.setState({
                simpleList: false,
                enhancedList: !this.state.enhancedList,
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="simpleList" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Customized Switches</button>
                        <button type="button" name="enhancedList" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Form Control Label Position</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.simpleList ? '' : <TransferList />}
                            {!this.state.enhancedList ? '' : <EnhancedTransferList />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default TransferListExample;
