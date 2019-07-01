
import React, { Component } from 'react';
import ButtonBases from './complexButtons'
import ContainedButtons from './containedButton';
import CustomizedButtons from './customizedButton';
import FloatingActionButtonZoom from './floatingButton';
import GroupedButtons from './groupButton';
import IconButtons from './IconButton';
import IconLabelButtons from './IconLabelButton';
import OutlinedButtons from './outlinedButtons';
import ButtonSizes from './sizeButton';
import SplitButton from './splitButton';
import TextButtons from './textButtons';

class buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonBase: false,
            contained: false,
            customized: false,
            floatingButton: false,
            groupButton: false,
            iconButton: false,
            iconLabel: false,
            outlined: false,
            buttonSize: false,
            splitButton: false,
            textButton: false
        }
    }

    buttonClick(event) {
        if (event.target.name === 'buttonBase') {
            this.setState({
                buttonBase: !this.state.buttonBase,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'contained') {
            this.setState({
                buttonBase: false,
                contained: !this.state.contained,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'customized') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: !this.state.customized,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'floatingButton') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: !this.state.floatingButton,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'groupButton') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: !this.state.groupButton,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'iconButton') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: !this.state.iconButton,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'iconLabel') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: !this.state.iconLabel,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'outlined') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: !this.state.outlined,
                buttonSize: false,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'buttonSize') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: !this.state.buttonSize,
                splitButton: false,
                textButton: false
            })
        }
        else if (event.target.name === 'splitButton') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: !this.state.splitButton,
                textButton: false
            })
        }
        else if (event.target.name === 'textButton') {
            this.setState({
                buttonBase: false,
                contained: false,
                customized: false,
                floatingButton: false,
                groupButton: false,
                iconButton: false,
                iconLabel: false,
                outlined: false,
                buttonSize: false,
                splitButton: false,
                textButton: !this.state.textButton
            })
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <button type="button" name="buttonBase" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Complex Button</button>
                        <button type="button" name="contained" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Contained Button</button>
                        <button type="button" name="customized" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Customized Button</button>
                        <button type="button" name="floatingButton" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Floating Button</button>
                        <button type="button" name="groupButton" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Group Button</button>
                        <button type="button" name="iconButton" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Icon Button</button>
                        <button type="button" name="iconLabel" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Icon Label Button</button>
                        <button type="button" name="outlined" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Outlined Button</button>
                        <button type="button" name="buttonSize" className="btn btn-info" onClick={this.buttonClick.bind(this)}> Button Size</button>
                        <button type="button" name="splitButton" className="btn btn-info" onClick={this.buttonClick.bind(this)}>Split Button</button>
                        <button type="button" name="textButton" className="btn btn-info ml-auto" onClick={this.buttonClick.bind(this)}>Text Button</button>
                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="form-group">
                            {!this.state.buttonBase ? '' : <ButtonBases />}
                            {!this.state.contained ? '' : <ContainedButtons />}
                            {!this.state.customized ? '' : <CustomizedButtons />}
                            {!this.state.floatingButton ? '' : <FloatingActionButtonZoom />}
                            {!this.state.groupButton ? '' : <GroupedButtons />}
                            {!this.state.iconButton ? '' : <IconButtons />}
                            {!this.state.iconLabel ? '' : <IconLabelButtons />}
                            {!this.state.outlined ? '' : <OutlinedButtons />}
                            {!this.state.buttonSize ? '' : <ButtonSizes />}
                            {!this.state.splitButton ? '' : <SplitButton />}
                            {!this.state.textButton ? '' : <TextButtons />}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
export default buttons;

