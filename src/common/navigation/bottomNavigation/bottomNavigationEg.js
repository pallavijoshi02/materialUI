import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import LabelBottomNavigation from './noLabelnavigation';
import Collapse from '@material-ui/core/Collapse';
import BottomNavigationCode from '../../../preComponents/navigation/bottomNavigation/bottomNavigation';
import NoLabelNavigationCode from '../../../preComponents/navigation/bottomNavigation/noLabelnavigation';

class BottomNavigationEg extends Component {
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
                    <h1>Bottom Navigation</h1>
                    <p className="text-justify">
                        Bottom navigation bars display three to five destinations at the bottom of a screen.
                        Each destination is represented by an icon and an optional text label. When a bottom navigation icon
                        is tapped, the user is taken to the top-level navigation destination associated with that icon.</p>
                    <div className="form-group">
                        <label><h3>Simple Bottom Navigation</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <BottomNavigationCode />
                        </Collapse>
                        <p className="text-justify">
                            When there are only three actions, display both icons and text labels at all times.
                            </p>
                        <div>
                            <SimpleBottomNavigation />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Label Bottom Navigation</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <NoLabelNavigationCode />
                        </Collapse>
                        <p className="text-justify">
                            If there are four or five actions, display inactive views as icons only.</p>
                        <div>
                            <LabelBottomNavigation />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BottomNavigationEg;
