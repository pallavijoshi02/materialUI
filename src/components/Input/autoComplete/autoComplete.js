import React, { Component } from 'react';
import IntegrationDownshift from './downShift';
import IntegrationAutosuggest from './reactAutosuggest';
import IntegrationReactSelect from './reactSelect';


class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Auto Complete</h1>
                    <div className="form-group">
                        <label><h3> Down shift</h3></label>
                        <p className="text-justify">
                            In the following example, we demonstrate how to use downshift.
                                The last demo allow to clear the input and show a number of options on focus.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IntegrationDownshift />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>React-Select </h3></label>
                        <p className="text-justify">
                            In the following example, we demonstrate how to use react-select.
                                </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IntegrationReactSelect />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>React Auto-Suggest</h3></label>
                        <p className="text-justify">
                            In the following example, we demonstrate how to use react-autosuggest.
                             It's also using autosuggest-highlight for the highlighting logic.
                          </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <IntegrationAutosuggest />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoComplete;


