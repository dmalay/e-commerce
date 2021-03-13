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
    <div className="flex flex-raw">
      <div className="flex items-center text-gray-700 px-3 sm:mx-3 sm:mt-0 italic">
        Sort by price:
        <button
          className="mx2 py-2 px-3 cursor-pointer transform hover:font-bold hover:text-gray-800 motion-reduce:transform-none"
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"price", "order": 1 }`}
        >
          Low to High
        </button>
        <button
          className=" py-2 px-3 cursor-pointer transform hover:font-bold hover:text-gray-800 motion-reduce:transform-none"
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"price", "order": -1 }`}
        >
          High to Low
        </button>
      </div>
      <div className="flex items-center text-gray-700 px-3 sm:mx-3 sm:mt-0 italic">
        Sort by name:
        <button
          className=" py-2 px-3 cursor-pointer transform hover:font-bold hover:text-gray-800 motion-reduce:transform-none"
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"name", "order": 1 }`}
        >
          A to Z
        </button>
        <button
          className=" py-2 px-3 cursor-pointer transform hover:font-bold hover:text-gray-800 motion-reduce:transform-none"
          type="button"
          id="sort-price"
          onClick={setOnClick}
          value={`{"type":"name", "order": -1 }`}
        >
          Z to A
        </button>
      </div>
    </div>
  )
}

SortBtn.propTypes = {}

export default SortBtn
