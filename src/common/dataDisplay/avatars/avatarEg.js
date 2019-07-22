import React, { Component } from 'react';
import LetterAvatars from './letterAvatars';
import ImageAvatars from './imageAvatars';
import IconAvatars from './iconAvatars';
import Collapse from '@material-ui/core/Collapse';
import ImageAvtarsCode from '../../../preComponents/dataDisplay/avatars/imageAvatars';
import LetterAvtarsCode from '../../../preComponents/dataDisplay/avatars/letterAvatars';
import IconAvtarsCode from '../../../preComponents/dataDisplay/avatars/iconAvatars';

class AvatarEg extends Component {
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
                    <h1>Avatars</h1>
                    <p className="text-justify">
                    Avatars are found throughout material design with uses in everything from tables to dialog menus.
                 </p>
                    <div className="form-group">
                        <label><h3>Image Avatars</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ImageAvtarsCode />
                        </Collapse>
                        <p className="text-justify">
                        Image avatars can be created by passing standard img props src or srcSet into the component.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <ImageAvatars/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Letter avatars</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <LetterAvtarsCode />
                        </Collapse>
                        <p className="text-justify">
                        Avatars containing simple characters can be created by passing your string as children.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                           <LetterAvatars/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Icon avatars</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <IconAvtarsCode />
                        </Collapse>
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