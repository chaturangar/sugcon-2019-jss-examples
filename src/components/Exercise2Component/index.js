import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';


const Exercise2Component = (props) => (
  <div>
    <Text field={props.fields.heading} />
  </div>
);


export default Exercise2Component;
