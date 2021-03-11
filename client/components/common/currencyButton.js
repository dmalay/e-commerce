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
      <button type="button" onClick={setOnClick} value="USD">
        USD
      </button>
      <button type="button" onClick={setOnClick} value="EUR">
        EUR
      </button>
      <button type="button" onClick={setOnClick} value="CAD">
        CAD
      </button>
    </div>
  )
}

export default CurrencyBtn
