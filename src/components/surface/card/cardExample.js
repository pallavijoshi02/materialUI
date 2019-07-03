import React, { Component } from 'react';
import RecipeReviewCard from './complexInteraction';
import MediaCard from './mediaCard';
import MediaControlCard from './mediaControlCard';
import SimpleCard from './simpleCard';

class CardExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            complexCard: false,
            mediaCard: false,
            media: false,
            simpleCard: false
        }
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
                       <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <RecipeReviewCard/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Media</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <MediaCard/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Media Control Card</h3></label>
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