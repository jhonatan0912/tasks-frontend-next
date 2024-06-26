'use client';

import { useState } from 'react';
import './switch.css';

export const Switch = ({ isChecked }: { isChecked: boolean; }) => {

  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className='slider round'></span>
    </label>
  );
};
