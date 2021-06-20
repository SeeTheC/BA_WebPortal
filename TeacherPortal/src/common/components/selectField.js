// @flow
import React from 'react';

type Props = {
  displayKey: string,
  valueKey: string,
  data: [Object],
  handleOptionChange: Function,
  placeholder?: string,
  wrapperStyle?: string,
  value: string
};

const SelectField = (props: Props) => {
  const {
    data,
    handleOptionChange,
    valueKey,
    displayKey,
    placeholder,
    wrapperStyle,
    value
  } = props;
  return (
    <select
      onClick={e => handleOptionChange(e.target.value)}
      onChange={e => handleOptionChange(e.target.value)}
      className={`form-control ${wrapperStyle || ''}`}
      value={value}
    >
      {placeholder && (
        <option value="" className="text-muted">
          --{placeholder}--
        </option>
      )}
      {data &&
        data.map(opt => (
          <option key={opt[valueKey]} value={opt[valueKey]}>
            {opt[displayKey]}
          </option>
        ))}
    </select>
  );
};

SelectField.defaultProps = {
  placeholder: 'Select',
  wrapperStyle: ''
};

export default SelectField;
