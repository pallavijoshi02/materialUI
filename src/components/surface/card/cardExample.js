import React, { Component } from 'react';
import RecipeReviewCard from './complexInteraction';
import MediaCard from './mediaCard';
import MediaControlCard from './mediaControlCard';
import SimpleCard from './simpleCard';
import Button from '@material-ui/core/Button';

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
                {/* <Button variant="contained" color="primary"> Complex Card</Button>
            <Button variant="contained" color="primary">Media Card</Button>
            <Button variant="contained" color="primary">Media Control Card</Button>
            <Button variant="contained" color="primary">Simple Card</Button> */}

                <div className="col-md-10 col-sm-10 col-xs-10">
                    <div className="form-group">
                        <label className="bmd-label-floating">Basic Grid</label>
                        <RecipeReviewCard />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <MediaCard />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <MediaControlCard />
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10 mt-5">
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <SimpleCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardExample;