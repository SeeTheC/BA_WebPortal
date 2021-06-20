/* eslint-disable jsx-a11y/label-has-for */
// @flow
import * as React from 'react';

type Props = {
  label?: string,
  labelStyle?: string,
  wrapperStyle?: string,
  inputStyle?: string,
  value?: any,
  htmlFor: string,
  onChange?: Function,
  inputCheckResult?: string,
  // eslint-disable-next-line react/require-default-props
  children?: React.Node,
  additionalInputProp?: Object,
  success?: boolean,
  onBlur?: Function,
  type?: string
};

const FormElement = (props: Props) => {
  const {
    label,
    labelStyle,
    wrapperStyle,
    inputStyle,
    value,
    htmlFor,
    onChange,
    inputCheckResult,
    children,
    additionalInputProp,
    success,
    onBlur,
    type
  } = props;
  return (
    <div className={`form-group ${wrapperStyle || ''}`}>
      <label htmlFor={htmlFor} className={`form-label ${labelStyle || ''}`}>
        {label}
        {children || (
          <input
            id={htmlFor}
            className={`form-control ${inputStyle || ''}`}
            value={value}
            max='1910-01-01'
            onChange={onChange ? e => onChange(e.target.value) : () => {}}
            {...additionalInputProp}
            onBlur={onBlur}
            type={additionalInputProp.type === "time" ? 'time' : additionalInputProp.type === "date" ? 'date' : type}
          />
        )}
        <span className={success ? 'valid-feedback' : 'invalid-feedback'}>
          {inputCheckResult}
        </span>
      </label>
    </div>
  );
};

FormElement.defaultProps = {
  label: '',
  labelStyle: '',
  wrapperStyle: '',
  inputStyle: '',
  inputCheckResult: '',
  onChange: () => {},
  value: '',
  additionalInputProp: {},
  success: false,
  onBlur: () => {},
  type: 'text'
};

export default FormElement;
