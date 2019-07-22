import React, { Component } from 'react';
import SimpleBadge from './simpleBadge';
import BadgeMax from './maxValueBadge';
import DotBadge from './dotBadge';
import BadgeVisibility from './badgeVisiblity';
import CustomizedBadges from './customizedBadge';
import Collapse from '@material-ui/core/Collapse';
import SimpleBadgeCode from '../../../preComponents/dataDisplay/badges/simpleBadge';
import MaxValueBadgeCode from '../../../preComponents/dataDisplay/badges/maxValueBadge';
import DotBadgeCode from '../../../preComponents/dataDisplay/badges/dotBadge';
import CustomizedBadgeCode from '../../../preComponents/dataDisplay/badges/customizedBadge';
import BadgeVisiblityCode from '../../../preComponents/dataDisplay/badges/badgeVisiblity';

class BadgeEg extends Component {
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
                    <h1>Badge</h1>
                     <div className="form-group">
                        <label><h3>Simple Badges</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleBadgeCode />
                        </Collapse>
                        <p className="text-justify">
                        Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <SimpleBadge/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Maximum Value</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MaxValueBadgeCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <BadgeMax/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Dot Badge</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <DotBadgeCode />
                        </Collapse>
                        <p className="text-justify">
                        The dot property changes a badge into a small dot. 
                        This can be used as a notification that something has changed without giving a count.
                        </p>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <DotBadge/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized badges</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomizedBadgeCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <CustomizedBadges/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Badge visibility</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <BadgeVisiblityCode />
                        </Collapse>
                        <p className="text-justify">
                        The visibility of badges can be controlled using the invisible property.
                        The badge auto hides with badgeContent is zero. You can override this with the showZero property.
                        </p>
                         <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <BadgeVisibility/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeEg;