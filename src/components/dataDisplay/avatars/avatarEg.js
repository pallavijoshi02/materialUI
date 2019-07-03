import React, { Component } from 'react';
import LetterAvatars from './letterAvatars';
import ImageAvatars from './imageAvatars';
import IconAvatars from './iconAvatars';

class AvatarEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Avatars</h1>
                    <p className="text-justify">
                    Avatars are found throughout material design with uses in everything from tables to dialog menus.
                 </p>
                    <div className="form-group">
                        <label><h3>Image Avatars</h3></label>
                        <p className="text-justify">
                        Image avatars can be created by passing standard img props src or srcSet into the component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ImageAvatars/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Letter avatars</h3></label>
                        <p className="text-justify">
                        Avatars containing simple characters can be created by passing your string as children.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <LetterAvatars/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Icon avatars</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <IconAvatars/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AvatarEg;