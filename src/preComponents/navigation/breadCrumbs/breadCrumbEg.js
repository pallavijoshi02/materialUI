import React, { Component } from 'react';
import CollapsedBreadcrumbs from './collapsedBreadcrumb';
import CustomizedBreadcrumbs from './customizedBreadcrumb';
import CustomSeparator from './customSeprator';
import IconBreadcrumbs from './iconBreadcrumb';
import RouterBreadcrumbs from './routerBreadcrumbs';
import SimpleBreadcrumbs from './simpleBreadcrumb';

class BreadcrumbEg extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Breadcrumbs</h1>
                    <div className="form-group">
                        <label><h3>Collapsed Breadcrumbs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CollapsedBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Customized Breadcrumbs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Custom Separator</h3></label>
                        <p className="text-justify">
                        In the following examples, we are using two string separators, and an SVG icon.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomSeparator />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Icon Breadcrumbs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IconBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Router Breadcrumbs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <RouterBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Simple Breadcrumbs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleBreadcrumbs />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreadcrumbEg;

