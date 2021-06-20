// @flow
import React from 'react';

type Props = {
  classStyle?: string,
  title: string
};

const FormTitle = (props: Props) => {
  const { classStyle, title } = props;
  return <div className={`card-title ${classStyle || ''}`}>{title}</div>;
};

FormTitle.defaultProps = {
  classStyle: ''
};

export default FormTitle;
