import React, { Component } from 'react';
import SimpleNossr from './simpleNossr';
import FrameDeferring from './frameDeferring';
import { Collapse } from '@material-ui/core';
import SimpleNoSsrCode from '../../../preComponents/utils/noSSR/simpleNossr';
import FrameDeferringCode from '../../../preComponents/utils/noSSR/frameDeferring';


class NossrEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked:false
        }
    }

    showClick(){
        this.setState({
                checked:!this.state.checked
        })
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>No SSR</h1>
                    <div className="form-group">
                        <label><h3>Client side deferring</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleNoSsrCode />
                        </Collapse>
                          <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimpleNossr/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Frame deferring</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <FrameDeferringCode />
                        </Collapse>
                        <p className="text-justify">
                        In it's core, the NoSsr component purpose is to defer rendering. As it's illustrated in the previous demo, you can use it to defer the rendering from the server to the client.

                        But you can also use it to defer the rendering within the client itself. You can wait a screen frame with the defer property to render the children. React does 2 commits instead of 1.           </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <FrameDeferring/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NossrEg;