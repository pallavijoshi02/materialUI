import React, { Component } from 'react';


class JavaScriptMedalCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
`
import React from 'react';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }),
  );

  return <span>{'{ minWidth: 600 } matches: ${"matches"}'}</span>;
}
`
                      }
                </pre>
            </div>
        )
    }
}


export default JavaScriptMedalCode;



