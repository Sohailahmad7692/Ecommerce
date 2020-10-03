import React from 'react';

import SignIn from '../../components/signin/signin';
import Signup from '../../components/signup/signup'

import './signin_signup.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <div><SignIn /></div>
    <div><Signup/></div>
  </div>
  
);

export default SignInAndSignUpPage;