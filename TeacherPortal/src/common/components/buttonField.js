// @flow
import React from 'react';

type Props = {
  style?: string,
  text: string,
  action: Function,
  styleProp?: string,
  disabled: boolean
};

const buttonField = (props: Props) => {
  const { text, action, style, styleProp, disabled } = props;
  return (
    <button
      className={`btn ${style || styleProp || ''}`}
      type="button"
      onClick={() => action()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

buttonField.defaultProps = {
  style: '',
  styleProp: ''
};

export default buttonField;
