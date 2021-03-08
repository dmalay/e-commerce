import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="card">
        <img className="card__image" src="" alt="" />
        <div className="card__price">price</div>
        <div className="currency">currency</div>
        <div className="card__title">title</div>
        <div className="card__product-amount">amnt</div>
      </div>
      <button type="button" >Minus Button</button>
      <button type="button" >Plus Button</button>
    </div>
  )
}

export default Card