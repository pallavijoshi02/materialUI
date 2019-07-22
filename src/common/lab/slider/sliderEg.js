import React, { Component } from 'react';
import ContinuousSlider from './continousSlider';
import DiscreteSlider from './discreteSlider';
import RangeSlider from './rangeSlider';
import CustomizedSlider from './customizedSlider';
import InputSlider from './InputSlider';
import VerticalSlider from './verticalSlider';
import Collapse from '@material-ui/core/Collapse';
import ContinousSliderCode from '../../../preComponents/lab/slider/continousSlider';
import DiscreteSliderCode from '../../../preComponents/lab/slider/discreteSlider';
import CustomizedSliderCode from '../../../preComponents/lab/slider/customizedSlider';
import VerticalSliderCode from '../../../preComponents/lab/slider/verticalSlider';
import RangeSliderCode from '../../../preComponents/lab/slider/rangeSlider';
import InputSliderCode from '../../../preComponents/lab/slider/InputSlider';

class SliderEg extends Component {
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
                    <h1>Slider</h1>
                    <p className="text-justify">
                        Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.
                    </p>
                    <div className="form-group">
                        <label><h3>Continuous sliders</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <ContinousSliderCode />
                        </Collapse>
                        <div>
                            <ContinuousSlider />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Discrete sliders</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <DiscreteSliderCode />
                        </Collapse>
                        <p className="text-justify">
                            Discrete sliders can be adjusted to a specific value by referencing its value indicator. By order of demos:
    
                        You can generate a mark for each step with marks={true}.
                            You can have custom marks by providing a rich array to the marks prop.
                        You can restrict the selectable values to those provided with the marks prop with step={null}.
                            You can force the thumb label to be always visible with valueLabelDisplay="on".
                        </p>
                        <div>
                            <DiscreteSlider />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Range sliders</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <RangeSliderCode />
                        </Collapse>
                        <div >
                            <RangeSlider />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Customized sliders</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <CustomizedSliderCode />
                        </Collapse>
                        <div>
                            <CustomizedSlider />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>With input field</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <InputSliderCode />
                        </Collapse>
                        <div>
                            <InputSlider />
                        </div>
                    </div>

                    <div className="form-group">
                        <label><h3>Vertical sliders</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked} className="scrollit">
                            <VerticalSliderCode />
                        </Collapse>
                        <div>
                            <VerticalSlider />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderEg;