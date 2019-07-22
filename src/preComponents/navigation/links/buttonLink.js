import React, { Component } from 'react';


class ButtonLinkCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
`
import React from 'react';
import Link from '@material-ui/core/Link';

export default function ButtonLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        alert("I'm a button.");
      }}
    >
      Button Link
    </Link>
  );
}
`
                      }
                </pre>
            </div>
        )
    }
}


export default ButtonLinkCode;

