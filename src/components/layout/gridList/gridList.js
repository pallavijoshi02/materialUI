import React, { Component } from 'react';
import ImageGridList from './imageGridList';
import SingleLineGridList from './singleLineGridList';
import TitlebarGridList from './titleBarGridList';
import AdvancedGridList from './advancedGridList';


class GridList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageGrid: false,
            singleLineGrid: false,
            titleBarGrid: false,
            advancedGrid: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'imageGrid') {
            this.setState({
                imageGrid: !this.state.imageGrid,
                singleLineGrid: false,
                titleBarGrid: false,
                advancedGrid: false,
            })
        }
        else if (event.target.name === 'singleLine') {
            this.setState({
                imageGrid: false,
                singleLineGrid: !this.state.singleLineGrid,
                titleBarGrid: false,
                advancedGrid: false,
            })
        }
        else if (event.target.name === 'titlebar') {
            this.setState({
                imageGrid: false,
                singleLineGrid: false,
                titleBarGrid: !this.state.titleBarGrid,
                advancedGrid: false,
            })
        }
        else if (event.target.name === 'advanced') {
            this.setState({
                imageGrid: false,
                singleLineGrid: false,
                titleBarGrid: false,
                advancedGrid: !this.state.advancedGrid,
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="imageGrid" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Image Grid List</button>
                        <button type="button" name="singleLine" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Single Line Grid List</button>
                        <button type="button" name="titlebar" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Title Bar Grid List</button>
                        <button type="button" name="advanced" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Advanced Grid List</button>
                      </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.imageGrid ? '' : <ImageGridList />}
                            {!this.state.singleLineGrid ? '' : <SingleLineGridList />}
                            {!this.state.titleBarGrid ? '' : <TitlebarGridList />}
                            {!this.state.advancedGrid ? '' : <AdvancedGridList />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default GridList;
