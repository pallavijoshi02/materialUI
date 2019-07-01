import React, { Component } from 'react';
import GridExample from './basicGrid';
import SpacingGrid from './spacingGrid'
import GridBreakPoints from './gridBreakPoints';
import AutoGrid from './autoGrid';
import ComplexGrid from './complexGrid';
import NestedGrid from './nestedGrid';


class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            basicGrid: false,
            spacingGrid: false,
            autoGrid: false,
            complexGrid: false,
            nestedGrid: false,
            breakPoints: false
        }
    }

    buttonClick(event) {
        if (event.target.name === 'basicGrid') {
            this.setState({
                basicGrid: !this.state.basicGrid,
                spacingGrid: false,
                autoGrid: false,
                complexGrid: false,
                nestedGrid: false,
                breakPoints: false
            })
        }
        else if (event.target.name === 'spacing') {
            this.setState({
                basicGrid: false,
                spacingGrid: !this.state.spacingGrid,
                autoGrid: false,
                complexGrid: false,
                nestedGrid: false,
                breakPoints: false
            })
        }
        else if (event.target.name === 'breakPoints') {
            this.setState({
                basicGrid: false,
                spacingGrid: false,
                autoGrid: false,
                complexGrid: false,
                nestedGrid: false,
                breakPoints: !this.state.breakPoints
            })
        }
        else if (event.target.name === 'autoGrid') {
            this.setState({
                basicGrid: false,
                spacingGrid: false,
                autoGrid: !this.state.autoGrid,
                complexGrid: false,
                nestedGrid: false,
                breakPoints: false
            })
        }
        else if (event.target.name === 'complex') {
            this.setState({
                basicGrid: false,
                spacingGrid: false,
                autoGrid: false,
                complexGrid: !this.state.basicGrid,
                nestedGrid: false,
                breakPoints: false
            })
        }
        else if (event.target.name === 'nested') {
            this.setState({
                basicGrid: false,
                spacingGrid: false,
                autoGrid: false,
                complexGrid: false,
                nestedGrid: !this.state.basicGrid,
                breakPoints: false
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="basicGrid" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Basic Grid</button>
                        <button type="button" name="spacing" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>spacing Grid</button>
                        <button type="button" name="breakPoints" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Grid Break Points</button>
                        <button type="button" name="autoGrid" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Auto Grid</button>
                        <button type="button" name="complex" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Complex Grid</button>
                        <button type="button" name="nested" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Nested Grid</button>


                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.basicGrid ? '' : <GridExample />}
                            {!this.state.spacingGrid ? '' : <SpacingGrid />}
                            {!this.state.breakPoints ? '' : <GridBreakPoints />}
                            {!this.state.autoGrid ? '' : <AutoGrid />}
                            {!this.state.complexGrid ? '' : <ComplexGrid />}
                            {!this.state.nestedGrid ? '' : <NestedGrid />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default Grid;