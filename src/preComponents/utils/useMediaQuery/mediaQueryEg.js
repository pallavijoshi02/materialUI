import React, { Component } from 'react';
import SimpleMediaQuery from './simpleMediaQuery';
import ThemeHelper from './themeHelper';
import JavaScriptMedia from './javaScriptMedal';
import ServerSide from './serverSide';
import UseWidth from './useWidth';


class MediaQueryEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Use Media Query</h1>
                    <div className="form-group">
                        <label><h3>Simple media query</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <SimpleMediaQuery/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Using Material-UI's breakpoint helpers</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ThemeHelper/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Using JavaScript syntax</h3></label>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <JavaScriptMedia/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Server-side rendering</h3></label>
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