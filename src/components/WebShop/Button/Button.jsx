import React from 'react';
import './Button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'GoogleSignIn',
  inverted: 'Inverted'
};
function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`Button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
