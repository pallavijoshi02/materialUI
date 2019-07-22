import React, { Component } from 'react';
import RecipeReviewCard from './complexInteraction';
import MediaCard from './mediaCard';
import MediaControlCard from './mediaControlCard';
import SimpleCard from './simpleCard';
import Collapse from '@material-ui/core/Collapse';
import SimpleCardCode from '../../../preComponents/surface/card/simpleCard';
import ComplexInteractionCode from '../../../preComponents/surface/card/complexInteraction';
import MediaCardCode from '../../../preComponents/surface/card/mediaCard';
import MediaControlCardCode from '../../../preComponents/surface/card/mediaControlCard';

class CardExample extends Component {
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
                    <h1>Cards</h1>
                    <p className="text-justify">
                    Cards are surfaces that display content and actions on a single topic.

                    They should be easy to scan for relevant and actionable information. 
                    Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
                  </p>
                    <div className="form-group">
                        <label><h3>Simple Card</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <SimpleCardCode />
                        </Collapse>
                        <p className="text-justify">
                        Although cards can support multiple actions, UI controls, and an overflow menu, 
                        use restraint and remember that cards are entry points to more complex and detailed information.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <SimpleCard/>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Complex Interaction</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ComplexInteractionCode />
                        </Collapse>
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <RecipeReviewCard/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Media</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MediaCardCode />
                        </Collapse>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <MediaCard/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Media Control Card</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <MediaControlCardCode />
                        </Collapse>
                        <p className="text-justify">
                        Supplemental actions within the card are explicitly called out using icons, 
                        text, and UI controls, typically placed at the bottom of the card.

                        Here's an example of a media control card.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                          <MediaControlCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardExample;