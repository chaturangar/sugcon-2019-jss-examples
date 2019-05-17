import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

const Exercise4Component = (props) => (
  <div>
    <p>Exercise4Component Component</p>
    <RichText field={props.fields.content} />
  </div>
);

export default Exercise4Component;
