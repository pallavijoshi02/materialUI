import React, { Component } from 'react';
import GridExample from './basicGrid';
import SpacingGrid from './spacingGrid'
import GridBreakPoints from './gridBreakPoints';
import AutoGrid from './autoGrid';
import ComplexGrid from './complexGrid';
import NestedGrid from './nestedGrid';


class Grid extends Component {
    constructor(props){
        super(props)
        this.state={
            hidden:true,
            basicGrid:false,
            spacingGrid:false
        }
    }

    buttonClick(){
        this.setState({
            basicGrid:true,
            spacingGrid:false
        })
    }

    render() {
        return (
            <div className="row">
                {/* <div className="container"> */}
                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating">Basic Grid</label>
                            <GridExample />
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> spacing Grid</label>
                            <SpacingGrid />
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Grid With BreakPoints</label>
                            <GridBreakPoints />
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Auto Grid</label>
                            <AutoGrid />
                        </div>
                    </div>

                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Complex Grid</label>
                            <ComplexGrid />
                        </div>
                    </div>


                    <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                        <div className="form-group">
                            <label className="bmd-label-floating"> Nested Grid</label>
                            <NestedGrid />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Grid;