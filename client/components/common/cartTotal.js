import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
    <div className="flex w-full mx-auto rounded-md shadow-lg overflow-hidden pt-4 pr-6 border border-gray-200">
      <div className="flex items-center justify-between h-16 w-full bg-cover text-gray-700">
        <div className="mx-3 italic font-mono border-b border-dotted border-red-700">
          <Link to="/logs">click here to view logs</Link>
        </div>
        <div id="total-amount" className="font-semibold">
          Your choice is {totalQty} items for {totalAmnt.toFixed(2)} of {currency}
        </div>
      </div>
    </div>
  )
}

export default CartTotal
