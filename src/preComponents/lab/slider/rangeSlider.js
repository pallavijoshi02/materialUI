import React, { Component } from 'react';

class RangeSliderCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
 `
 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Typography from '@material-ui/core/Typography';
 import Slider from '@material-ui/lab/Slider';
 
 const useStyles = makeStyles({
   root: {
     width: 300,
   },
 });
 
 function valuetext(value) {
   return '${"value"}°C';
 }
 
 export default function RangeSlider() {
   const classes = useStyles();
   const [value, setValue] = React.useState([20, 37]);
 
   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
 
   return (
     <div className={classes.root}>
       <Typography id="range-slider" gutterBottom>
         Temperature range
       </Typography>
       <Slider
         value={value}
         onChange={handleChange}
         valueLabelDisplay="auto"
         aria-labelledby="range-slider"
         getAriaValueText={valuetext}
       />
     </div>
   );
 }
 `
                      }
                </pre>
            </div>
        )
    }
}


export default RangeSliderCode;




