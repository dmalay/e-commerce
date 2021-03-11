import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addLog } from '../../redux/reducers/logs'

const ToCartIcon = () => {
  const { cart } = useSelector((s) => s.products)
  const totalQty = Object.values(cart).reduce((acc, rec) => acc + rec, 0)

  const dispatch = useDispatch()
  const setOnClick = () => {
    dispatch(addLog(`navigated to "/cart" page`))
  }

  return (
    <div>
      items in cart: {totalQty}
      <Link to="/cart" onClick={setOnClick}>go to CarT</Link>
    </div>
  )
}

export default ToCartIcon
