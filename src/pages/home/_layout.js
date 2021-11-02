import React from 'react';

export default ({ Component, ...pageProps }) => {
  return <div>
      layout
      <Component {...pageProps} />
  </div>
};
