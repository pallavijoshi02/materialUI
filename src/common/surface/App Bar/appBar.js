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
import Collapse from '@material-ui/core/Collapse';
import ButtonAppBarCode from '../../../preComponents/surface/App Bar/buttonAppBar';
import SimpleAppBarCode from '../../../preComponents/surface/App Bar/simpleAppBar';
import PrimarySearchAppBarCode from '../../../preComponents/surface/App Bar/primarySearchAppBar';
import MenuBarCode from '../../../preComponents/surface/App Bar/menuAppBar';
import SearchAppBarCode from '../../../preComponents/surface/App Bar/searchAppBar';
import DenseAppBarCode from '../../../preComponents/surface/App Bar/denseAppBar';
import BottomAppBarCode from '../../../preComponents/surface/App Bar/bottomAppBar';
import HideAppBarCode from '../../../preComponents/surface/App Bar/hideAppBar';
import ElevateAppBarCode from '../../../preComponents/surface/App Bar/elevateAppBar';


class AppBarExample extends Component {
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
                    <h1>App Bar</h1>
                    <p className="text-justify">
                    The top App Bar provides content and actions related to the current screen.
                     It’s used for branding, screen titles, navigation, and actions.

                        It can transform into a contextual action bar or used as a navbar.
                  </p>
                    <div className="form-group">
                        <label><h3>App Bar with buttons</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ButtonAppBarCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <ButtonAppBar/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Simple App Bar</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleAppBarCode />
                        </Collapse>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <SimpleAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>App Bar with a primary search field</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <PrimarySearchAppBarCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <PrimarySearchAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>App Bar with menu</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MenuBarCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MenuAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>App Bar with search field</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SearchAppBarCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <SearchAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Dense (desktop only)</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <DenseAppBarCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <DenseAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Bottom App Bar</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <BottomAppBarCode />
                        </Collapse>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <BottomAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Hide App Bar</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <HideAppBarCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <HideAppBar/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Elevate App Bar</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ElevateAppBarCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                       <ElevateAppBar/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppBarExample;