import React from 'react'

const Card = (props) => {
  const { list } = props
  return (
    <div>
      <div className="card">
        <img className="card__image" src={list.image} alt={list.title} />
        <div className="card__price">price{list.price}</div>
        <div className="currency">currency{list.currency}</div>
        <div className="card__title">title{list.title}</div>
        <div className="card__product-amount">amnt</div>
      </div>
      <button type="button" >Minus Button</button>
      <button type="button" >Plus Button</button>
    </div>
  )
}

export default Card