import React, { Component } from 'react';
import IntegrationDownshift from './downShift';
import IntegrationAutosuggest from './reactAutosuggest';
import IntegrationReactSelect from './reactSelect';
import Collapse from '@material-ui/core/Collapse';
import DownshiftCode from '../../../preComponents/Input/autoComplete/downShift';
import ReactSelectCode from '../../../preComponents/Input/autoComplete/reactSelect';
import ReactAutoSuggestCode from '../../../preComponents/Input/autoComplete/reactAutosuggest';


class AutoComplete extends Component {
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
                    <h1>Auto Complete</h1>
                    <div className="form-group mt-5 ">
                        <label><h3> Down shift</h3></label>
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <DownshiftCode />
                        </Collapse>
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <ReactSelectCode />
                        </Collapse>
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
                        <button onClick={this.showClick.bind(this)} className="pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </button>
                        <Collapse in={this.state.checked}>
                            <ReactAutoSuggestCode />
                        </Collapse>
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


