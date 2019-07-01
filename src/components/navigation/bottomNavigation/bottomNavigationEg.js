import React, { Component } from 'react';
import SimpleBottomNavigation from './bottomNavigation';
import LabelBottomNavigation from './noLabelnavigation';


class BottomNavigationEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bottomNav: false,
            noLabelNav: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'bottomNav') {
            this.setState({
                bottomNav: !this.state.bottomNav,
                noLabelNav: false,
            })
        }
        else if (event.target.name === 'noLabelNav') {
            this.setState({
                bottomNav: false,
                noLabelNav: !this.state.noLabelNav,
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="bottomNav" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Simple Bottom Navigation</button>
                        <button type="button" name="noLabelNav" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Label Bottom Navigation</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.bottomNav ? '' : <SimpleBottomNavigation />}
                            {!this.state.noLabelNav ? '' : <LabelBottomNavigation />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
export default BottomNavigationEg;
