import React, { Component } from 'react';
import CollapsedBreadcrumbs from './collapsedBreadcrumb';
import CustomizedBreadcrumbs from './customizedBreadcrumb';
import CustomSeparator from './customSeprator';
import IconBreadcrumbs from './iconBreadcrumb';
import RouterBreadcrumbs from './routerBreadcrumbs';
import SimpleBreadcrumbs from './simpleBreadcrumb';
import Collapse from '@material-ui/core/Collapse';
import CollapsedBreadCrumbCode from '../../../preComponents/navigation/breadCrumbs/collapsedBreadcrumb';
import CustomizedBreadCrumbCode from '../../../preComponents/navigation/breadCrumbs/customizedBreadcrumb';
import CustomSepratorCode from '../../../preComponents/navigation/breadCrumbs/customSeprator';
import IconBreadcrumbCode from '../../../preComponents/navigation/breadCrumbs/iconBreadcrumb';
import RouterBreadcrumbCode from '../../../preComponents/navigation/breadCrumbs/routerBreadcrumbs';
import SimpleBreadcrumbCode from '../../../preComponents/navigation/breadCrumbs/simpleBreadcrumb';

class BreadcrumbEg extends Component {
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
                    <h1>Breadcrumbs</h1>
                    <div className="form-group">
                        <label><h3>Collapsed Breadcrumbs</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CollapsedBreadCrumbCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CollapsedBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Customized Breadcrumbs</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomizedBreadCrumbCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Custom Separator</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomSepratorCode />
                        </Collapse>
                        <p className="text-justify">
                        In the following examples, we are using two string separators, and an SVG icon.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomSeparator />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Icon Breadcrumbs</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <IconBreadcrumbCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IconBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Router Breadcrumbs</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <RouterBreadcrumbCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <RouterBreadcrumbs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3> Simple Breadcrumbs</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleBreadcrumbCode />
                        </Collapse>
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

