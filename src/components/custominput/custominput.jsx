import React from 'react';

import './custominput.scss';

const CustomButton = ({ children,isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ?'google-signin':''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;