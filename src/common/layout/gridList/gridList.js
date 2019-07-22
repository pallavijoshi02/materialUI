import React, { Component } from 'react';
import ImageGridList from './imageGridList';
import SingleLineGridList from './singleLineGridList';
import TitlebarGridList from './titleBarGridList';
import AdvancedGridList from './advancedGridList';
import Collapse from '@material-ui/core/Collapse';
import ImageGridListCode from '../../../preComponents/layout/gridList/imageGridList';
import SingleLineGridListCode from '../../../preComponents/layout/gridList/singleLineGridList';
import TitlebarGridListCode from '../../../preComponents/layout/gridList/titleBarGridList';
import AdvancedGridListCode from '../../../preComponents/layout/gridList/advancedGridList';


class GridList extends Component {
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
                    <h1>Grid List</h1>
                    <p className="text-justify">
                        Grid lists represent a collection of items in a repeated pattern. They help improve the visual
                        comprehension of the content they hold.
                    </p>

                    <div className="form-group">
                        <label><h3> Image-Only Grid List</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ImageGridListCode />
                        </Collapse>
                        <p className="text-justify">
                            A simple example of a scrollable image GridList.
                       </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ImageGridList />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3> Single Line Grid List</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <SingleLineGridListCode />
                        </Collapse>
                        <p className="text-justify">
                            This example demonstrates a horizontal scrollable single-line grid list of images.
                             Horizontally scrolling grid lists are discouraged because the scrolling interferes with typical
                             reading patterns, affecting comprehension. One notable exception is a horizontally-scrolling,
                         single-line grid list of images, such as a gallery.  </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SingleLineGridList />
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Grid List With TitleBar</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <TitlebarGridListCode />
                        </Collapse>
                        s <p className="text-justify">
                            This example demonstrates the use of the GridListTileBar to add an overlay to each GridListTile.
                            The overlay can accommodate a title, subtitle and secondary action - in this example an IconButton.
                           </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <TitlebarGridList />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Advanced Grid List</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <AdvancedGridListCode />
                        </Collapse>
                          <p className="text-justify">
                            This example demonstrates "featured" tiles, using the rows and cols props to adjust the size
                             of the tile, and the padding prop to adjust the spacing. The tiles have a customized titlebar,
                             positioned at the top and with a custom gradient titleBackground. The secondary action IconButton
                              is positioned on the left.
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <AdvancedGridList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GridList;
