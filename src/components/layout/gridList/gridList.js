import React, { Component } from 'react';
import ImageGridList from './imageGridList';
import SingleLineGridList from './singleLineGridList';
import TitlebarGridList from './titleBarGridList';
import AdvancedGridList from './advancedGridList';

class GridList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating">Image Only Grid List</label>
                        <ImageGridList />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Single line Grid list</label>
                        <SingleLineGridList />
                    </div>
                </div>
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid list with titlebars</label>
                        <TitlebarGridList />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Advanced Grid list</label>
                        <AdvancedGridList />
                    </div>
                </div>

            </div>
        )
    }
}

export default GridList;