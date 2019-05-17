import React from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const Exercise9Component = (props) => (
  <div>
    <p>The current Sitecore Context is...</p>
    <pre style={{ maxHeight: '400px', overflow: 'scroll' }}>
      {JSON.stringify(props.sitecoreContext, null, 2)}
    </pre>
  </div>
);

export default withSitecoreContext()(Exercise9Component);
