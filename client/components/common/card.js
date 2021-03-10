import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeCart } from '../../redux/reducers/products'

const Card = (props) => {
  const dispatch = useDispatch()

  const { list } = props
  const currency = useSelector((s) => s.products.currency)
  const rate = useSelector((s) => s.products.rates[currency])
  const priceRecalc = typeof rate === 'undefined' ? list.price : list.price * rate
  const quantity = useSelector((s) => s.products.cart[list.id])

  const onClickAdd = () => {
    dispatch(changeCart(list.id, quantity ? quantity + 1 : 1))
  }
  const onClickRemove = () => {
    dispatch(changeCart(list.id, quantity > 1 ? quantity - 1: 0))
  }
  const onClickDelete = () => {
    dispatch(changeCart(list.id, 0))
  }

  return (
    <div>
      <div className="card">
        <img className="card__image" src={list.image} alt={list.title} />
        <div className="card__price">price:{priceRecalc.toFixed(2)}</div>
        <div className="currency">currency{currency}</div>
        <div className="card__title">title{list.title}</div>
        <div className="card__product-amount">amnt{quantity}</div>
      </div>
      <button type="button" onClick={onClickRemove}>Minus Button</button>
      <button type="button" onClick={onClickDelete}>Minus Button</button>
      <button type="button" onClick={onClickAdd}>Plus Button</button>
    </div>
  )
}

export default Card