import React, { Component } from 'react';
import GridExample from './basicGrid';
import NestedGrid from './nestedGrid';
import ButtonBases from '../../Input/button/complexButtons';
import Buttons from '../../Input/button/buttons';
import Button from '@material-ui/core/Button'

class Grideg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            basicGrid: false,
            spacingGrid: false,
            autoGrid: false,
            complexGrid: false,
            nestedGrid: false,
            breakPoints: false
        }
    }
    nextClick() {
        this.setState({
            nestedGrid: !this.state.nestedGrid,
            basicGrid: !this.state.basicGrid
        })

    }

    buttonClick(event) {
        if (event.target.name == 'basicGrid') {
            this.setState({
                basicGrid: true,
                spacingGrid: false
            })
        }
        else if (event.target.name == 'spacing') {
            this.setState({
                spacingGrid: true,
                basicGrid: !this.state.basicGrid
            })
        }
        else if (event.target.name == 'breakPoint') {
            this.setState({
                breakPoints: !this.state.breakPoints,
            })
        }
        else if (event.target.name == 'auto') {
            this.setState({
                autoGrid: !this.state.autoGrid,
            })
        }
        else if (event.target.name == 'complex') {
            this.setState({
                complexGrid: !this.state.complexGrid,
            })
        }
        else if (event.target.name == 'nested') {
            this.setState({
                nestedGrid: !this.state.nestedGrid,
            })
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="card">
                        <div className="card-body">
                            <button type="button" className="btn btn-info ">Ba</button>
                            <button type="button" className="btn btn-info pull-right" onClick={this.nextClick.bind(this)}>Next</button>

                            <div className="row">
                                <div className={this.state.basicGrid ? 'hidden' : ''}>
                                    <h1>Basic Grid</h1>
                                    <GridExample />
                                </div>
                                <div className={!this.state.nestedGrid ? 'hidden' : ''}>
                                    <h1>Nested Grid</h1>
                                    <NestedGrid />
                                </div>
                                <br />
                                <button type="button" className="btn btn-info ">previous</button>
                                <button type="button" className="btn btn-info pull-right" onClick={this.nextClick.bind(this)}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Grideg;