import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ToCartIcon = () => {
  const { cart } = useSelector((s) => s.products)
  const totalQty = Object.values(cart).reduce((acc, rec) => acc + rec, 0)

  return (
    <div>
      items in cart: {totalQty}
      <Link to="/cart">go to CarT</Link>
    </div>
  )
}

export default ToCartIcon
