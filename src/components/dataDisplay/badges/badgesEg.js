import React, { Component } from 'react';
import SimpleBadge from './simpleBadge';
import BadgeMax from './maxValueBadge';
import DotBadge from './dotBadge';
import BadgeVisibility from './badgeVisiblity';
import CustomizedBadges from './customizedBadge';

class BadgeEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Badge</h1>
                     <div className="form-group">
                        <label><h3>Simple Badges</h3></label>
                        <p className="text-justify">
                        Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                        <SimpleBadge/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Maximum Value</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <BadgeMax/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Dot Badge</h3></label>
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
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <CustomizedBadges/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Badge visibility</h3></label>
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