import React, { Component } from 'react';


class SimpleMediaQueryCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
`
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{'(min-width:600px) matches: ${"matches"}'}</span>;
}


`
                      }
                </pre>
            </div>
        )
    }
}


export default SimpleMediaQueryCode;
