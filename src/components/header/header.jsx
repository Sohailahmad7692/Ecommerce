import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/auth';
import CartIcon from '../carticon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';
// import {auth} from '../../firebase/firebase'

import './header.scss';
const auth=firebase.auth()

const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser?(
        <div  className='option'  onClick={()=>auth.signOut()}>
          Sign Out
        </div>
        ):(
          <Link className='option' to='/signin'> SignIn</Link>
        )}
         <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);