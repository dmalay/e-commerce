import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeCart } from '../../redux/reducers/products'

const OrderedCard = (props) => {
  const { cartData } = props
  const quantity = useSelector((s) => s.products.cart[cartData.id])
  const { rates, currency } = useSelector((s) => s.products)
  const rate = rates[currency] ? rates[currency] : 1

  const dispatch = useDispatch()
  const onClickRemove = () => {
    dispatch(changeCart(cartData.id, quantity - 1))
  }
  const onClickAdd = () => {
    dispatch(changeCart(cartData.id, quantity + 1))
  }
  const onClickDelete = () => {
    dispatch(changeCart(cartData.id, 0))
  }

  return (
    <div>
      <img className="product__image" src={cartData.image} alt={cartData.title} />
      <div className="product__title">{cartData.title}</div>
      <div className="product__price">Price{(rate * cartData.price).toFixed(2)}</div>
      <div className="currency">{currency}</div>
      <div className="product__amount">{quantity}</div>
      <div className="product__total-price">{(rate * cartData.price * quantity).toFixed(2)}</div>
      <button type="button" onClick={onClickRemove}>
        Remove
      </button>
      <button type="button" onClick={onClickDelete}>
        Clear
      </button>
      <button type="button" onClick={onClickAdd}>
        Add
      </button>
    </div>
  )
}

export default OrderedCard
