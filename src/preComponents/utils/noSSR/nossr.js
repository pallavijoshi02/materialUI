import React, { Component } from 'react';
import SimpleNossr from './simpleNossr';
import FrameDeferring from './frameDeferring';
import { Collapse } from '@material-ui/core';


class NossrEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>No SSR</h1>
                    <div className="form-group">
                        <label><h3>Client side deferring</h3></label>
                        <Collapse> </Collapse>
                          <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimpleNossr/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Frame deferring</h3></label>
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