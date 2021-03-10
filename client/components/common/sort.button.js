import React from 'react'
import { useDispatch } from 'react-redux'
import { setSortMethod } from '../../redux/reducers/products'

const SortBtn = () => {
  const dispatch = useDispatch()
  const setOnClick = (e) => {
    dispatch(setSortMethod(e.target.value))
  }

  return (
    <div>
        by price
      <button type="button" id="sort-price" onClick={setOnClick} value={`{"type":"price", "order": 1 }`}>
      High to Low
      </button>
      <button type="button" id="sort-name" onClick={setOnClick} value={`{"type":"name", "order": 1 }`}>
        by name
      </button>
    </div>
  )
}

SortBtn.propTypes = {}

export default SortBtn