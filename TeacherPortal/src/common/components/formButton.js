// @flow
import React from 'react';

type Props = {
  btnStyle?: string,
  text: string,
  btnWrapper?: string,
  onClick: Function
};

const FormButton = (props: Props) => {
  const { text, btnStyle, btnWrapper, onClick } = props;
  return (
    <div className={`form-footer ${btnWrapper || ''}`}>
      <button
        className={`btn btn-block btn-primary ${btnStyle || ''}`}
        type="button"
        onClick={() => onClick()}
      >
        {text}
      </button>
    </div>
  );
};

FormButton.defaultProps = {
  btnWrapper: '',
  btnStyle: ''
};

export default FormButton;
