import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './common/header'
import OrderedCard from './common/orderedCard'
import CartTotal from './common/cartTotal'

const Cart = () => {
  const { productCards, cart } = useSelector((s) => s.products)
  const cartData = productCards.filter((data) => cart[data.id])

  return (
    <div>
      <Head title="CartPage" />
      <Header />
      <div className="flex flex-col md:items-center ">
        <div className="container mx-auto px-6">
          <CartTotal />
          <div>
            {cartData.map((it) => {
              return <OrderedCard key={it.id} cartData={it} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {}

export default Cart
