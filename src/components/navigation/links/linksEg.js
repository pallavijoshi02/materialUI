import React, { Component } from 'react';
import ButtonLink from './buttonLink';
import Links from './simpleLinks';

class LinkEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Link</h1>
                    <p className="text-justify">
                        The Link component allows you to easily customize anchor elements with your theme colors
                    and typography styles.</p>
                    <div className="form-group">
                        <label><h3>Simple Bottom Navigation</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ButtonLink />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Simple Link</h3></label>
                        <p className="text-justify">
                            The Link component is built on top of the Typography component. You can leverage its properties.</p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <Links />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LinkEg;

