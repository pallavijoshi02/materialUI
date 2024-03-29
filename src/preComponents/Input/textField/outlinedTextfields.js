import React, { Component } from 'react';
class OutlinedTextFieldsCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
 `
 import React from 'react';
 import clsx from 'clsx';
 import { makeStyles } from '@material-ui/core/styles';
 import MenuItem from '@material-ui/core/MenuItem';
 import TextField from '@material-ui/core/TextField';
 
 const currencies = [
   {
     value: 'USD',
     label: '$',
   },
   {
     value: 'EUR',
     label: '€',
   },
   {
     value: 'BTC',
     label: '฿',
   },
   {
     value: 'JPY',
     label: '¥',
   },
 ];
 
 const useStyles = makeStyles(theme => ({
   container: {
     display: 'flex',
     flexWrap: 'wrap',
   },
   textField: {
     marginLeft: theme.spacing(1),
     marginRight: theme.spacing(1),
   },
   dense: {
     marginTop: theme.spacing(2),
   },
   menu: {
     width: 200,
   },
 }));
 
 export default function OutlinedTextFields() {
   const classes = useStyles();
   const [values, setValues] = React.useState({
     name: 'Cat in the Hat',
     age: '',
     multiline: 'Controlled',
     currency: 'EUR',
   });
 
   const handleChange = name => event => {
     setValues({ ...values, [name]: event.target.value });
   };
 
   return (
     <form className={classes.container} noValidate autoComplete="off">
       <TextField
         id="outlined-name"
         label="Name"
         className={classes.textField}
         value={values.name}
         onChange={handleChange('name')}
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-uncontrolled"
         label="Uncontrolled"
         defaultValue="foo"
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         required
         id="outlined-required"
         label="Required"
         defaultValue="Hello World"
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         error
         id="outlined-error"
         label="Error"
         defaultValue="Hello World"
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         disabled
         id="outlined-disabled"
         label="Disabled"
         defaultValue="Hello World"
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-email-input"
         label="Email"
         className={classes.textField}
         type="email"
         name="email"
         autoComplete="email"
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-password-input"
         label="Password"
         className={classes.textField}
         type="password"
         autoComplete="current-password"
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-read-only-input"
         label="Read Only"
         defaultValue="Hello World"
         className={classes.textField}
         margin="normal"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       />
       <TextField
         id="outlined-dense"
         label="Dense"
         className={clsx(classes.textField, classes.dense)}
         margin="dense"
         variant="outlined"
       />
       <TextField
         id="outlined-dense-multiline"
         label="Dense multiline"
         className={clsx(classes.textField, classes.dense)}
         margin="dense"
         variant="outlined"
         multiline
         rowsMax="4"
       />
       <TextField
         id="outlined-multiline-flexible"
         label="Multiline"
         multiline
         rowsMax="4"
         value={values.multiline}
         onChange={handleChange('multiline')}
         className={classes.textField}
         margin="normal"
         helperText="hello"
         variant="outlined"
       />
       <TextField
         id="outlined-multiline-static"
         label="Multiline"
         multiline
         rows="4"
         defaultValue="Default Value"
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-helperText"
         label="Helper text"
         defaultValue="Default Value"
         className={classes.textField}
         helperText="Some important text"
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-with-placeholder"
         label="With placeholder"
         placeholder="Placeholder"
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-textarea"
         label="Multiline Placeholder"
         placeholder="Placeholder"
         multiline
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-number"
         label="Number"
         value={values.age}
         onChange={handleChange('age')}
         type="number"
         className={classes.textField}
         InputLabelProps={{
           shrink: true,
         }}
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-search"
         label="Search field"
         type="search"
         className={classes.textField}
         margin="normal"
         variant="outlined"
       />
       <TextField
         id="outlined-select-currency"
         select
         label="Select"
         className={classes.textField}
         value={values.currency}
         onChange={handleChange('currency')}
         SelectProps={{
           MenuProps: {
             className: classes.menu,
           },
         }}
         helperText="Please select your currency"
         margin="normal"
         variant="outlined"
       >
         {currencies.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
       <TextField
         id="outlined-select-currency-native"
         select
         label="Native select"
         className={classes.textField}
         value={values.currency}
         onChange={handleChange('currency')}
         SelectProps={{
           native: true,
           MenuProps: {
             className: classes.menu,
           },
         }}
         helperText="Please select your currency"
         margin="normal"
         variant="outlined"
       >
         {currencies.map(option => (
           <option key={option.value} value={option.value}>
             {option.label}
           </option>
         ))}
       </TextField>
       <TextField
         id="outlined-full-width"
         label="Label"
         style={{ margin: 8 }}
         placeholder="Placeholder"
         helperText="Full width!"
         fullWidth
         margin="normal"
         variant="outlined"
         InputLabelProps={{
           shrink: true,
         }}
       />
       <TextField
         id="outlined-bare"
         className={classes.textField}
         defaultValue="Bare"
         margin="normal"
         variant="outlined"
         inputProps={{ 'aria-label': 'bare' }}
       />
     </form>
   );
 }
 `
                      }
                </pre>
            </div>
        )
    }
}
export default OutlinedTextFieldsCode;
