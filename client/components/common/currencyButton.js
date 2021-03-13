import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrency } from '../../redux/reducers/products'
import { addLog } from '../../redux/reducers/logs'

const CurrencyBtn = () => {
  const { currency } = useSelector((s) => s.products)
  const dispatch = useDispatch()

  const setOnClick = (e) => {
    dispatch(setCurrency(e.target.value))
    dispatch(addLog(`changed currency from ${currency} to ${e.target.value}`))
  }
  return (
    <div>
      <button
        className="mx-2 px-5 py-2 rounded-full border border-gray-700 font-semibold  text-gray-700 max-w-max shadow-sm hover:shadow-lg"
        type="button"
        onClick={setOnClick}
        value="USD"
      >
        USD
      </button>
      <button
        className="mx-2 px-5 py-2 rounded-full border border-gray-700 font-bold text-gray-700 max-w-max shadow-sm hover:shadow-lg"
        type="button"
        onClick={setOnClick}
        value="EUR"
      >
        EUR
      </button>
      <button
        className="mx-2 px-5 py-2 rounded-full border border-gray-700 font-bold text-gray-700 max-w-max shadow-sm hover:shadow-lg"
        type="button"
        onClick={setOnClick}
        value="CAD"
      >
        CAD
      </button>
    </div>
  )
}

export default CurrencyBtn
