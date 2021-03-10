import React from 'react'
import { useSelector } from 'react-redux'

const Card = (props) => {
  const { list } = props
  const currency = useSelector((s) => s.products.currency)
  const rate = useSelector((s) => s.products.rates[currency])
  const priceRecalc = typeof rate === 'undefined' ? list.price : list.price * rate

  return (
    <div>
      <div className="card">
        <img className="card__image" src={list.image} alt={list.title} />
        <div className="card__price">price:{priceRecalc.toFixed(2)}</div>
        <div className="currency">currency{currency}</div>
        <div className="card__title">title{list.title}</div>
        <div className="card__product-amount">amnt</div>
      </div>
      <button type="button" >Minus Button</button>
      <button type="button" >Plus Button</button>
    </div>
  )
}

export default Card