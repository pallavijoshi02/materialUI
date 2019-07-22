import React, { Component } from 'react';
import SimpleMediaQuery from './simpleMediaQuery';
import ThemeHelper from './themeHelper';
import JavaScriptMedia from './javaScriptMedal';
import ServerSide from './serverSide';
import UseWidth from './useWidth';
import Collapse from '@material-ui/core/Collapse';
import SimpleMediaQueryCode from '../../../preComponents/utils/useMediaQuery/simpleMediaQuery';
import ThemeHelperCode from '../../../preComponents/utils/useMediaQuery/themeHelper';
import JavaScriptMedalCode from '../../../preComponents/utils/useMediaQuery/javaScriptMedal';
import ServerSideCode from '../../../preComponents/utils/useMediaQuery/serverSide';
import UseWidthCode from '../../../preComponents/utils/useMediaQuery/useWidth';


class MediaQueryEg extends Component {
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
                    <h1>Use Media Query</h1>
                    <div className="form-group">
                        <label><h3>Simple media query</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleMediaQueryCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimpleMediaQuery/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Using Material-UI's breakpoint helpers</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ThemeHelperCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ThemeHelper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Using JavaScript syntax</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <JavaScriptMedalCode />
                        </Collapse>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <JavaScriptMedia/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Server-side rendering</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ServerSideCode />
                        </Collapse>
                        <p className="text-justify">
                        An implementation of matchMedia is required on the server, we recommend using css-mediaquery.
                         We also encourage the usage of the useMediaQueryTheme version of the hook that fetches properties from the theme. 
                         This way, you can provide a ssrMatchMedia option once for all your React tree.
                        </p>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ServerSide/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Migrating from withWidth()</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <UseWidthCode />
                        </Collapse>
                        <p className="text-justify"> 
                        The withWidth() higher-order component injects the screen width of the page. You can reproduce the same behavior with a useWidth hook:                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <UseWidth/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaQueryEg;