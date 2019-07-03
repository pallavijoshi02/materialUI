import React, { Component } from 'react';
import SimpleDialogDemo from './simpleDialog';
import AlertDialog from './alertDialog';
import FormDialog from './formDialog';
import CustomizedDialogs from './customizedDialog';
import FullScreenDialog from './fullScreenDialog';
import MaxWidthDialog from './maxWidthDialog';
import ResponsiveDialog from './responsiveDialog';
import ConfirmationDialog from './confirmationDialog';
import ScrollDialog from './scrollDialog';
import DraggableDialog from './dragableDialog';
import AlertDialogSlide from './alertDialogSlide';

class DialogEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Dialogs</h1>
                    <p className="text-justify">
                        A Dialog is a type of modal window that appears in front of app content to provide critical
                        information or ask for a decision. Dialogs disable all app functionality when they appear,
                        and remain on screen until confirmed, dismissed, or a required action has been taken.

                        Dialogs are purposefully interruptive, so they should be used sparingly.
                 </p>
                    <div className="form-group">
                        <label><h3>Simple Dialogs</h3></label>
                        <p className="text-justify">
                            Simple dialogs can provide additional details or actions about a list item. For example,
                            they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).

                            Touch mechanics:

                            Choosing an option immediately commits the option and closes the menu
                            Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SimpleDialogDemo />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Alerts</h3></label>
                        <p className="text-justify">
                            Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.

                            Most alerts don't need titles. They summarize a decision in a sentence or two by either:

                            Asking a question (e.g. "Delete this conversation?")
                            Making a statement related to the action buttons
                            Use title bar alerts only for high-risk situations, such as the potential loss of connectivity.
                            Users should be able to understand the choices based on the title and button text alone.

                            If a title is required:

                            Use a clear question or statement with an explanation in the content area, such as "Erase USB storage?".
                            Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you sure?”
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <AlertDialog />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Transitions</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                         <AlertDialogSlide/>
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Form dialogs</h3></label>
                        <p>
                            Form dialogs allow users to fill out form fields within a dialog. For example,
                            if your site prompts for potential subscribers to fill in their email address,
                            they can fill out the email field and touch 'Submit'.
                    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FormDialog />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Customized dialogs</h3></label>
                        <p className="text-justify">
                            Here is an example of customizing the component. You can learn more about this in
                             the overrides documentation page.

                             The dialog has a close button added to aide usability.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <CustomizedDialogs />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Optional sizes</h3></label>
                        <p>
                            You can set a dialog maximum width by using the maxWidth enumerable in combination with
                             the fullWidth boolean. When the fullWidth property is true, the dialog will adapt based
                             on the maxWidth value.
                    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <MaxWidthDialog />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Full-screen dialogs</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FullScreenDialog />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Responsive full-screen</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ResponsiveDialog />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>Confirmation dialogs</h3></label>
                        <p className="text-justify">
                            Confirmation dialogs require users to explicitly confirm their choice before
                            an option is committed. For example, users can listen to multiple ringtones but
                            only make a final selection upon touching “OK”.
    
                            Touching “Cancel” in a confirmation dialog, or pressing Back, cancels the action,
                            discards any changes, and closes the dialog.
                    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ConfirmationDialog />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Scrolling long content</h3></label>
                        <p className="text-justify">
                            When dialogs become too long for the user’s viewport or device, they scroll.
    
                            scroll=paper the content of the dialog scrolls within the paper element.
                            scroll=body the content of the dialog scrolls within the body element.
                            Try the demo below to see what we mean:
                    </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <ScrollDialog />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Draggable dialog</h3></label>
                        <p>
                            You can create a draggable dialog by using react-draggable.
                             To do so, you can pass the the imported Draggable component as the PaperComponent
                              of the Dialog component. This will make the entire dialog draggable.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <DraggableDialog />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogEg;