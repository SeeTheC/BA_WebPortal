// @flow
import React from 'react';

type Props = {
  handleInputChange: Function,
  value: any,
  name: string,
  items: []
};

const RadioButtons = (props: Props) => {
  const { handleInputChange, value, name, items } = props;
  return (
    <ul style={{ display: 'inline' }}>
      {items.map(data => (
        <span key={data.value}>
          <input
            type="radio"
            name={name}
            value={data.value}
            onChange={e => handleInputChange(e.target.value, name)}
            checked={value === data.value}
          />{' '}
          {data.name}
        </span>
      ))}
    </ul>
  );
};

export default RadioButtons;
