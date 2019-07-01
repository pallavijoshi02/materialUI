import React, { Component } from 'react';
import ControlledOpenSelect from './controlledOpenSelect';
import CustomizedSelects from './customizedSelects';
import DialogSelect from './dialougeSelect';
import MultipleSelect from './multipleSelect';
import SimpleSelect from './simpleSelect';
import NativeSelects from './nativeSelect';


class SelectExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            controlledOpenSelect:false,
            customizedSelects:false,
            dialougeSelect:false,
            multipleSelect:false,
            simpleSelect:false,
            nativeSelect:false
        }
    }

    buttonClick(event) {
        if (event.target.name === 'controlledOpenSelect') {
            this.setState({
                controlledOpenSelect:!this.state.controlledOpenSelect,
                customizedSelects:false,
                dialougeSelect:false,
                multipleSelect:false,
                simpleSelect:false,
                nativeSelect:false
            })
        }
        else if (event.target.name === 'customizedSelects') {
            this.setState({
                controlledOpenSelect:false,
                customizedSelects:!this.state.customizedSelects,
                dialougeSelect:false,
                multipleSelect:false,
                simpleSelect:false,
                nativeSelect:false
            })
        }
        else if (event.target.name === 'dialougeSelect') {
            this.setState({
                controlledOpenSelect:false,
                customizedSelects:false,
                dialougeSelect:!this.state.dialougeSelect,
                multipleSelect:false,
                simpleSelect:false,
                nativeSelect:false
            })
        }
        else if (event.target.name === 'multipleSelect') {
            this.setState({
                controlledOpenSelect:false,
                customizedSelects:false,
                dialougeSelect:false,
                multipleSelect:!this.state.multipleSelect,
                simpleSelect:false,
                nativeSelect:false
            })
        }
        else if (event.target.name === 'simpleSelect') {
            this.setState({
                controlledOpenSelect:false,
                customizedSelects:false,
                dialougeSelect:false,
                multipleSelect:false,
                simpleSelect:!this.state.simpleSelect,
                nativeSelect:false
            })
        }
        else if (event.target.name === 'nativeSelect') {
            this.setState({
                controlledOpenSelect:false,
                customizedSelects:false,
                dialougeSelect:false,
                multipleSelect:false,
                simpleSelect:false,
                nativeSelect:!this.state.nativeSelect
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="controlledOpenSelect" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Controlled Open Select</button>
                        <button type="button" name="customizedSelects" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Cutomized Select</button>
                        <button type="button" name="dialougeSelect" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Dialog Select</button>
                        <button type="button" name="multipleSelect" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Multiple Select</button>
                        <button type="button" name="simpleSelect" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Simple Select</button>
                        <button type="button" name="nativeSelect" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Native Select</button>
                      </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.controlledOpenSelect ? '' : <ControlledOpenSelect />}
                            {!this.state.customizedSelects ? '' : <CustomizedSelects />}
                            {!this.state.dialougeSelect ? '' : <DialogSelect />}
                            {!this.state.multipleSelect ? '' : <MultipleSelect />}
                            {!this.state.simpleSelect ? '' : <SimpleSelect />}
                            {!this.state.nativeSelect ? '' : <NativeSelects />}
                        </div>
                    </div>
                </div >
            </div>
            
        )
    }
}

export default SelectExample;


