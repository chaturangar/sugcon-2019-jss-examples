import React from 'react';
import { withSitecoreContext, Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const Exercise7Component = (props) => (
  <div>
    <p>Custom Route Level Fields</p>
    Custom Route News Title Field : <Text field={props.sitecoreContext.route.fields.newsTitle} />
    <br/>

    Custom Route News Description Field : <RichText field={props.sitecoreContext.route.fields.newsDescription} />
    <br/>

    Custom Route News Image Field : <Image field={props.sitecoreContext.route.fields.newsImage} />
  </div>
);

export default withSitecoreContext()(Exercise7Component);
