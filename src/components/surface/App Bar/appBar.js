import React, { Component } from 'react';
import BottomAppBar from './bottomAppBar';
import ButtonAppBar from './buttonAppBar';
import DenseAppBar from './denseAppBar';
import ElevateAppBar from './elevateAppBar';
import HideAppBar from './hideAppBar';
import MenuAppBar from './menuAppBar';
import PrimarySearchAppBar from './primarySearchAppBar';
import SearchAppBar from './searchAppBar';
import SimpleAppBar from './simpleAppBar';


class AppBarExample extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-sm-10 col-xs-10">
                    <div className="form-group">
                        <label className="bmd-label-floating">Basic Grid</label>
                        <BottomAppBar />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <ButtonAppBar />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <DenseAppBar />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <ElevateAppBar />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <HideAppBar />
                    </div>
                </div>


                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <MenuAppBar />
                    </div>
                </div>
                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <PrimarySearchAppBar />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <SearchAppBar />
                    </div>
                </div>


                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <SimpleAppBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default AppBarExample;