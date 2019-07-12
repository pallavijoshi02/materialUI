import React, { Component } from 'react';

class InpuTextfieldCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
 `
 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Input from '@material-ui/core/Input';
 
 const useStyles = makeStyles(theme => ({
   container: {
     display: 'flex',
     flexWrap: 'wrap',
   },
   input: {
     margin: theme.spacing(1),
   },
 }));
 
 export default function Inputs() {
   const classes = useStyles();
 
   return (
     <div className={classes.container}>
       <Input
         defaultValue="Hello world"
         className={classes.input}
         inputProps={{
           'aria-label': 'Description',
         }}
       />
       <Input
         placeholder="Placeholder"
         className={classes.input}
         inputProps={{
           'aria-label': 'Description',
         }}
       />
       <Input
         value="Disabled"
         className={classes.input}
         disabled
         inputProps={{
           'aria-label': 'Description',
         }}
       />
       <Input
         defaultValue="Error"
         className={classes.input}
         error
         inputProps={{
           'aria-label': 'Description',
         }}
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
export default InpuTextfieldCode;




