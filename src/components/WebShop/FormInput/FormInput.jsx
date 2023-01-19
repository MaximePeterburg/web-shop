import React from 'react';
import './FormInput.scss';

function FormInput({ label, ...otherProps }) {
  return (
    <div className='Group'>
      <input className='FormInput' {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? 'Shrink' : ''} FormInputLabel`}>{label}</label>
      )}
    </div>
  );
}

export default FormInput;
