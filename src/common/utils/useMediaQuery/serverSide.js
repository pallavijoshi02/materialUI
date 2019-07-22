import React from 'react';
import mediaQuery from 'css-mediaquery';
import { ThemeProvider } from '@material-ui/styles';
import useMediaQueryTheme from '@material-ui/core/useMediaQuery';

function MyComponent() {
  const matches = useMediaQueryTheme('@media (min-width:600px)');

  return <span>{`@media (min-width:600px) matches: ${matches}`}</span>;
}

export default function ServerSide() {
  const ssrMatchMedia = query => ({
    matches: mediaQuery.match(query, {
      width: 800,
    }),
  });

  return (
    <ThemeProvider theme={{ props: { MuiUseMediaQuery: { ssrMatchMedia } } }}>
      <MyComponent />
    </ThemeProvider>
  );
}
