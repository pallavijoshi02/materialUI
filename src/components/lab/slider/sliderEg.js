import React, { Component } from 'react';
import ContinuousSlider from './continousSlider';
import DiscreteSlider from './discreteSlider';
import RangeSlider from './rangeSlider';
import CustomizedSlider from './customizedSlider';
import InputSlider from './InputSlider';
import VerticalSlider from './verticalSlider';



class SliderEg extends Component {
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
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ContinuousSlider />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Discrete sliders</h3></label>
                        <p className="text-justify">
                            Discrete sliders can be adjusted to a specific value by referencing its value indicator. By order of demos:
    
                        You can generate a mark for each step with marks={true}.
                            You can have custom marks by providing a rich array to the marks prop.
                        You can restrict the selectable values to those provided with the marks prop with step={null}.
                            You can force the thumb label to be always visible with valueLabelDisplay="on".
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DiscreteSlider />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>Range sliders</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <RangeSlider />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Customized sliders</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedSlider />
                        </div>
                    </div>
                    <div className="form-group">
                        <label><h3>With input field</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <InputSlider />
                        </div>
                    </div>

                    <div className="form-group">
                        <label><h3>Vertical sliders</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <VerticalSlider />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderEg;