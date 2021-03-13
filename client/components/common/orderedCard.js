import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeCart } from '../../redux/reducers/products'
import { addLog } from '../../redux/reducers/logs'

const OrderedCard = (props) => {
  const { cartData } = props
  const quantity = useSelector((s) => s.products.cart[cartData.id])
  const { rates, currency } = useSelector((s) => s.products)
  const rate = rates[currency] ? rates[currency] : 1

  const dispatch = useDispatch()
  const onClickRemove = () => {
    dispatch(changeCart(cartData.id, quantity - 1))
    dispatch(addLog(`removed ${cartData.title} from the cart`))
  }
  const onClickAdd = () => {
    dispatch(changeCart(cartData.id, quantity + 1))
    dispatch(addLog(`added ${cartData.title} to the cart`))
  }
  const onClickDelete = () => {
    dispatch(changeCart(cartData.id, 0))
    dispatch(addLog(`deleted ${cartData.title} from the cart`))
  }

  return (
    <div className="mx-auto rounded-md shadow-lg overflow-hidden border border-gray-300 max-h-full">
      <div className="flex items-center justify-between min-h-32 md:h-full text-gray-700 overflow-hidden space-x-4">
        <div className="min-w-1/3">
          <img
            className="orderedCard__image w-40 h-32 object-cover p-2 mx-4"
            src={cartData.image}
            alt={cartData.title}
          />
        </div>
        <div className="flex flex-col justify-start w-full px-5">
          <span className="orderedCard__title uppercase">{cartData.title}</span>
          <span className="orderedCard__title italic">{cartData.description}</span>
        </div>
        <div className="flex flex-col justify-end max-w-1/4">
          <div className="flex flex-raw justify-between">
            <div className="currency pr-3">{currency}</div>
            <div className="orderedCard__price pl-3">
              {(quantity * rate * cartData.price).toFixed(2)}
            </div>
          </div>
          <div className="flex flex-raw justify-between">
            <span>QTY:</span>
            <span className="orderedCard__product-amount font-semibold">{quantity}</span>
          </div>
        </div>
        <div className="flex justify-around">
          <button
            type="button"
            onClick={onClickRemove}
            className="p-3 rounded-full bg-gray-200 text-black mx-4 hover:bg-gray-400 focus:outline-none focus:bg-gray-500"
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
            onClick={onClickDelete}
            className="p-2 rounded-full bg-gray-200 text-black mx-4 hover:bg-gray-400 focus:outline-none focus:bg-gray-500"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={onClickAdd}
            className="p-3 rounded-full bg-gray-200 text-black mx-4 hover:bg-gray-400 focus:outline-none focus:bg-gray-500"
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

export default OrderedCard
