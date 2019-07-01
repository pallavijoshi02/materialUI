import React, { Component } from 'react';
import BreakPointUp from './breakPointUp';
import BreakPointOnly from './breakPointOnly';
import BreakPointDown from './breakPointDown';


class Hidden extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breakPointUp: false,
            breakPointOnly: false,
            breakPointDown: false
        }
    }

    buttonClick(event) {
        if (event.target.name === 'pointUp') {
            this.setState({
                breakPointUp: !this.state.breakPointUp,
                breakPointOnly: false,
                breakPointDown: false,
            })
        }
        else if (event.target.name === 'pointOnly') {
            this.setState({
                breakPointUp: false,
                breakPointOnly:  !this.state.breakPointOnly,
                breakPointDown: false,
            })
        }
        else if (event.target.name === 'pointDown') {
            this.setState({
                breakPointUp: false,
                breakPointOnly: false,
                breakPointDown:  !this.state.breakPointDown,
            })
        }
        
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="pointUp" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Break Point Up</button>
                        <button type="button" name="pointDown" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Break Point Down</button>
                        <button type="button" name="pointOnly" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Break Point Only</button>
                      </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.breakPointUp ? '' : <BreakPointUp />}
                            {!this.state.breakPointOnly ? '' : <BreakPointOnly />}
                            {!this.state.breakPointDown ? '' : <BreakPointDown />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
export default Hidden;