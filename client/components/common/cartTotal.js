import React from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {
  const { rates, currency, cart, productCards } = useSelector((s) => s.products)
  const rate = rates[currency] ? rates[currency] : 1

  const totalQty = Object.values(cart).reduce((acc, rec) => acc + rec, 0)
  const totalAmnt = Object.keys(cart)
    .map((it) => {
      const obj = productCards.find((item) => item.id === it)
      return +obj.price * +cart[it]
    })
    .reduce((acc, rec) => acc + +(rec * rate).toFixed(2), 0)

  return (
    <div>
      <div id="total-amount">
        Your choice is {totalQty} for {totalAmnt.toFixed(2)} of {currency}
      </div>
    </div>
  )
}

export default CartTotal
