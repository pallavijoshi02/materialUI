import React, { Component } from 'react';
import IntegrationDownshift from './downShift';
import IntegrationAutosuggest from './reactAutosuggest';
import IntegrationReactSelect from './reactSelect';


class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            intDownShift: false,
            intAutoSuggest: false,
            intReactSelect: false,
        }
    }

    buttonClick(event) {
        if (event.target.name === 'intDownShift') {
            this.setState({
                intDownShift: !this.state.intDownShift,
                intAutoSuggest: false,
                intReactSelect: false,
            })
        }
        else if (event.target.name === 'intAutoSuggest') {
            this.setState({
                intDownShift: false,
                intAutoSuggest: !this.state.intAutoSuggest,
                intReactSelect: false,
            })
        }
        else if (event.target.name === 'intReactSelect') {
            this.setState({
                intDownShift: false,
                intAutoSuggest: false,
                intReactSelect: !this.state.intReactSelect,
            })
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="intDownShift" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Integration Down shift</button>
                        <button type="button" name="intAutoSuggest" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Integration Auto-suggest</button>
                        <button type="button" name="intReactSelect" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Integration React Select</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.intDownShift ? '' : <IntegrationDownshift />}
                            {!this.state.intAutoSuggest ? '' : <IntegrationAutosuggest />}
                            {!this.state.intReactSelect ? '' : <IntegrationReactSelect />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
export default AutoComplete;
