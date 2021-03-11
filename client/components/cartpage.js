import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './common/header'
import OrderedCard from './common/ordered-card'

const Cart = () => {
  const { productCards, cart } = useSelector((s) => s.products)
  const cartData = productCards.filter((data) => cart[data.id])

  return (
    <div>
      <Head title="CartPage" />
      <Header />
      <div>
        {cartData.map((it) => {
          return <OrderedCard key={it.id} cartData={it} />
        })}
      </div>
    </div>
  )
}

Cart.propTypes = {}

export default Cart
