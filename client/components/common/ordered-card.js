import React from 'react'
import { useSelector } from 'react-redux'
// import { changeCart } from '../redux/reducers/products'

const OrderedCard = (props) => {
  const { cartData } = props
  const { rates, currency, productCards, cart } = useSelector((s) => s.products)
  const rate = rates[currency] ? rates[currency] : 1

  const totalQty = Object.values(cart).reduce((acc, rec) => acc + rec, 0)
  const totalAmnt = Object.keys(cart)
    .map((it) => {
      const obj = productCards.find(item => item.id === it)
      return +obj.price * +cart[it]
    })
    .reduce((acc, rec) => acc + +(rec * rate).toFixed(2), 0)

  return (
    <div>
      <img className="product__image" src={cartData.image} alt={cartData.title} />
      <div className="product__title">title{cartData.title}</div>
      <div className="product__price">price{(rate * cartData.price).toFixed(2)}</div>
      <div className="product__amount">product amount{totalQty}</div>
      <div className="product__total-price">product total price{totalAmnt}</div>
      <button type="button" >Minus Button</button>
      <button type="button" >Clear Button</button>
      <button type="button" >Plus Button</button>
      <div id="total-amount">totalAmnt</div>
    </div>
  )
}

export default OrderedCard