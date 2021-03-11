import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../../redux/reducers/products'

const CurrencyBtn = () => {
  const dispatch = useDispatch()

  const setOnClick = (e) => {
    dispatch(setCurrency(e.target.value))
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
