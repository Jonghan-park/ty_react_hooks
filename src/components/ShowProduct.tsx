import React from 'react'
import { Product } from './UseStateComponent';

const ShowProduct = (props: Product ) => {
  return (
    <div className='show_product__contents'>
      <div className="each_product__title">
        {props.name}
      </div>
      <div className="each_product__price">
        {props.price}
      </div>
      <div className="each_product__qty">
        {props.qty}
      </div>
    </div>
  )
}

export default ShowProduct