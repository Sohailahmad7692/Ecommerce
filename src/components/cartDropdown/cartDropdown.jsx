import React from 'react';
import { connect } from 'react-redux';
import {selectCartItems} from '../../Redux/cart/carReselect'
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custominput/custominput';
import CartItem from '../cartItem/cart_item';
import {toggleCartHidden} from '../../Redux/cart/cartAction'
import { withRouter } from 'react-router-dom';
import './cartDropdown.scss';

const CartDropdown = ({ cartItems,history,dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length?(
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      ):(
        <span className='empty_message'>This Cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));