import React from 'react';
import CustomButton from '../custominput/custominput'
import {connect} from 'react-redux'

import './collection-item.styles.scss';
import {addItem} from '../../Redux/cart/cartAction'

const CollectionItem = ({item,addItem }) => {
  const {name, price, imageUrl}=item;
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name} </span>
      <span className='price'>Rs.{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
  </div>
)
    };
    const mapDispatchToProps=dispatch=>({
      addItem:item=>dispatch(addItem(item))
    })

export default connect(null,mapDispatchToProps)(CollectionItem);