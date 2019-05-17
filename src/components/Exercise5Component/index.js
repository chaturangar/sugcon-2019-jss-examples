import React from 'react';
import { Text, RichText, Image, Link, DateField, File } from '@sitecore-jss/sitecore-jss-react';

const Exercise5Component = (props) => (
  <div>
    <p>Exercise5 - Fields</p>
    Text Field : <Text field={props.fields.textfield} />
    <br/><br/>
    RichText Field : <RichText field={props.fields.richtextfield} />
    <br/><br/>
    Image Field : <Image field={props.fields.imagefield} />
    <br/><br/>
    Checkbox Field : To be implemented
    <br/><br/>
    General Link Field : <Link field={props.fields.generallinkfield} />
    <br/><br/>
    Date Field : <DateField field={props.fields.datefield} />
    <br/><br/>
    File Field : <File field={props.fields.filefield} />
  </div>
);

export default Exercise5Component;
