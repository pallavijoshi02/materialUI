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


class Buttons extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating">Basic Grid</label>
                       <ButtonBases/>
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <ContainedButtons />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <CustomizedButtons />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <FloatingActionButtonZoom />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <GroupedButtons />
                    </div>
                </div>


                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <IconButtons />
                    </div>
                </div>


                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> spacing Grid</label>
                        <IconLabelButtons />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Grid With BreakPoints</label>
                        <OutlinedButtons />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Auto Grid</label>
                        <ButtonSizes />
                    </div>
                </div>

                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <SplitButton />
                    </div>
                </div>


                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <div className="form-group">
                        <label className="bmd-label-floating"> Complex Grid</label>
                        <TextButtons />
                    </div>
                </div>
            </div>
        )
    }
}

export default Buttons;