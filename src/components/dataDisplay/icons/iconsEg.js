import React, { Component } from 'react';
import SvgIcons from './svgIcon';
import SvgMaterialIcons from './svgMaterialIcon';
import Icons from './fontMaterialIcon';
import FontAwesome from './fontAwsomeIcon';

class IconEg extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8" style={{ marginLeft: 250, padding: 38 }}>
                    <h1>Icons</h1>
                    <p className="text-justify">
                        A system icon or UI icon, symbolizes a command, file, device, or directory.
                         System icons are also used to represent common actions like trash, print, and save,
                         and are commonly found in app bars, toolbars, buttons, and lists. Google has provided
                          a set of Material icons that follow these guidelines.

                            Material-UI provides two components to render system icons: SvgIcon for rendering SVG paths,
                            and Icon for rendering font icons.
                        </p>
                    <div className="form-group">
                        <label><h3>SVG Icons</h3></label>
                        <p className="text-justify">
                            The SvgIcon component takes an SVG path element as its child and converts it to a React component
                            that displays the path, and allows the icon to be styled and respond to mouse events.
                             SVG elements should be scaled for a 24x24px viewport.

                            The resulting icon can be used as is, or included as a child for other Material-UI components
                            that use icons. By default, an Icon will inherit the current text color. Optionally,
                            you can set the icon color using one of the theme color properties: primary, secondary,
                            action, error & disabled.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SvgIcons />
                        </div>
                    </div>

                    <div className="form-group mt-5">
                        <label> <h3>SVG Material icons</h3></label>
                        <p className="text-justify">
                            It's interesting to have the building blocks needed to implement custom icons,
                            but what about presets? We provide a separate npm package, @material-ui/icons,
                            that includes the 1,000+ official Material icons converted to SvgIcon components.
                        </p>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <SvgMaterialIcons />
                            </div>
                            <p className="text-justify">
                                <h3> Usage</h3>
                                You can use material.io/tools/icons to find a specific icon. When importing an icon,
                                 keep in mind that the names of the icons are PascalCase, for instance:
    
                                delete is exposed as @material-ui/icons/Delete
                                delete forever is exposed as @material-ui/icons/DeleteForever
                                For *"themed"* icons, append the theme name to the icon name. For instance with the
    
                                The Outlined delete icon is exposed as @material-ui/icons/DeleteOutlined
                                The Rounded delete icon is exposed as @material-ui/icons/DeleteRounded
                                The Two Tone delete icon is exposed as @material-ui/icons/DeleteTwoTone
                                The Sharp delete icon is exposed as @material-ui/icons/DeleteSharp
                                There are three exceptions to this rule:
    
                                3d_rotation is exposed as @material-ui/icons/ThreeDRotation
                                4k is exposed as @material-ui/icons/FourK
                                360 is exposed as @material-ui/icons/ThreeSixty
                         </p>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Font Material icons</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <Icons />
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <label> <h3>Font Awesome</h3></label>
                        <div style={{ backgroundColor: "lightGray", height: "auto" }}>
                            <FontAwesome />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IconEg;