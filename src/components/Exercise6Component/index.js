import React from 'react';
import { withSitecoreContext, Text } from '@sitecore-jss/sitecore-jss-react';

const Exercise6Component = (props) => (
  <div>
    <p>RouteLevel and Reference Fields</p>
    <br/>

    <p>Route level <code>pageTitle</code> field:{' '}</p>
    <Text field={props.sitecoreContext.route.fields.pageTitle} />
  </div>
);

export default withSitecoreContext()(Exercise6Component);
