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
    <div className="text-gray-700 focus:outline-none mx-8 sm:mx-0">
      <div className="flex relative">
        <Link to="/cart" onClick={setOnClick}>
          <svg
            className="h-10 w-10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWwidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {totalQty ? (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs font-semibold text-center">
              {totalQty}
            </div>
          ) : null}
        </Link>
      </div>
    </div>
  )
}

export default ToCartIcon
