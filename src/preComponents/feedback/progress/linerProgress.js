import React, { Component } from 'react';

class LinerProgressCode extends Component {
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

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
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


export default LinerProgressCode;


