import React from 'react'
import { useDispatch } from 'react-redux'
import { setSortMethod } from '../../redux/reducers/products'
import { addLog } from '../../redux/reducers/logs'

const SortBtn = () => {
  const dispatch = useDispatch()
  const setOnClick = (e) => {
    dispatch(setSortMethod(e.target.value))
    dispatch(addLog(`sorted by ${e.target.value}`))
  }

  return (
    <div>
      <div>
        by price:
      <button
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"price", "order": 1 }`}
        >
          High to Low
        </button>
        <button
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"price", "order": -1 }`}
        >
          Low to High
        </button>
      </div>
      <div>
        by name:
        <button
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"price", "order": 1 }`}
        >
          High to Low
        </button>
        <button
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"price", "order": -1 }`}
        >
          High to Low
        </button>
      </div>
    </div>
  )
}

SortBtn.propTypes = {}

export default SortBtn
