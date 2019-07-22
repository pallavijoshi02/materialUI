import React, { Component } from 'react';
import ButtonLink from './buttonLink';
import Links from './simpleLinks';
import Collapse from '@material-ui/core/Collapse';
import ButtonLinkCode from '../../../preComponents/navigation/links/buttonLink';
import SimpleLinkCode from '../../../preComponents/navigation/links/simpleLinks';

class LinkEg extends Component {
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
                    <h1>Link</h1>
                    <p className="text-justify">
                        The Link component allows you to easily customize anchor elements with your theme colors
                    and typography styles.</p>
                    <div className="form-group">
                        <label><h3>Simple Bottom Navigation</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ButtonLinkCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ButtonLink />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Simple Link</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleLinkCode />
                        </Collapse>
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

