import React from 'react'

const OrderedCard = () => {
  return (
    <div>
      <img className="product__image" src="" alt="" />
      <div className="product__title">title</div>
      <div className="product__price">price</div>
      <div className="product__amount">product amount</div>
      <div className="product__total-price">product total price</div>
      <button type="button" >Minus Button</button>
      <button type="button" >Clear Button</button>
      <button type="button" >Plus Button</button>
      <div id="total-amount">totalAmnt</div>
    </div>
  )
}

export default OrderedCard