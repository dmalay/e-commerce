import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeCart } from '../../redux/reducers/products'
import { addLog } from '../../redux/reducers/logs'

const Card = (props) => {
  const dispatch = useDispatch()
  const { list } = props
  const currency = useSelector((s) => s.products.currency)
  const rate = useSelector((s) => s.products.rates[currency])
  const priceRecalc = typeof rate === 'undefined' ? list.price : list.price * rate
  const quantity = useSelector((s) => s.products.cart[list.id])

  const onClickAdd = () => {
    dispatch(changeCart(list.id, quantity ? quantity + 1 : 1))
    dispatch(addLog(`added item ${list.title} to the cart`))
  }
  const onClickRemove = () => {
    dispatch(changeCart(list.id, quantity > 1 ? quantity - 1 : 0))
    dispatch(addLog(`removed item ${list.title} from the cart`))
  }
  const onClickDelete = () => {
    dispatch(changeCart(list.id, 0))
    dispatch(addLog(`cleared all items in the cart`))
  }

  return (
    <div className="bg-white">
      <div className="card w-full max-w-sm mx-auto rounded-md shadow-lg overflow-hidden">
        <img
          className="card__image flex h-64 w-full bg-cover object-contain"
          src={list.image}
          alt={list.title}
        />
        <div className="px-5 py-2">
          <h3 className="card__title text-gray-700 uppercase">{list.title}</h3>
          <span className="currency mt-2">{currency}</span>
          <span className="card__price mt-2 px-2">{priceRecalc.toFixed(2)}</span>
          <span className="card__product-amount pl-24 font-semibold">{quantity}</span>
        </div>
        <div className="flex justify-around">
          <button
            type="button"
            className="p-3 rounded-full bg-gray-200 text-black mx-4 mb-3 hover:bg-gray-400 focus:outline-none focus:bg-gray-500"
            onClick={onClickRemove}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 feather feather-minus"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 rounded-full bg-gray-200 text-black px-6 mx-5 mb-3 hover:bg-gray-400 focus:outline-none focus:bg-gray-500"
            onClick={onClickDelete}
          >
            Clear
          </button>
          <button
            type="button"
            className="p-3 rounded-full bg-gray-200 text-black mx-4 mb-3 hover:bg-gray-400 focus:outline-none focus:bg-gray-500"
            onClick={onClickAdd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
