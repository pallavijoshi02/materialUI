import React, { Component } from 'react';

class LinerQueryCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
 `
 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import LinearProgress from '@material-ui/core/LinearProgress';
 
 const useStyles = makeStyles({
   root: {
     flexGrow: 1,
   },
 });
 
 export default function LinearQuery() {
   const classes = useStyles();
 
   return (
     <div className={classes.root}>
       <LinearProgress variant="query" />
       <br />
       <LinearProgress color="secondary" variant="query" />
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


export default LinerQueryCode;
