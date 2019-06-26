import React, { Component } from 'react';
import GridExample from './basicGrid';
import SpacingGrid from './spacingGrid'
import GridBreakPoints from './gridBreakPoints';
import AutoGrid from './autoGrid';
import ComplexGrid from './complexGrid';
import NestedGrid from './nestedGrid';
import DashBoard from '../../../Dashboard';



class Grid extends Component {
    render() {
        return (
            <div className="row">
                <DashBoard />
                <div className="container">
                    <div className="col-md-10 col-sm-10 col-xs-10">
                        <div className="form-group">
                            <label className="bmd-label-floating">Basic Grid</label>
                            <GridExample />
                        </div>
                    </div>

                    <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                        <div className="form-group">
                            <label className="bmd-label-floating"> spacing Grid</label>
                            <SpacingGrid />
                        </div>
                    </div>

                    <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                        <div className="form-group">
                            <label className="bmd-label-floating"> Grid With BreakPoints</label>
                            <GridBreakPoints />
                        </div>
                    </div>

                    <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                        <div className="form-group">
                            <label className="bmd-label-floating"> Auto Grid</label>
                            <AutoGrid />
                        </div>
                    </div>

                    <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                        <div className="form-group">
                            <label className="bmd-label-floating"> Complex Grid</label>
                            <ComplexGrid />
                        </div>
                    </div>


                    <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                        <div className="form-group">
                            <label className="bmd-label-floating"> Complex Grid</label>
                            <NestedGrid />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Grid;