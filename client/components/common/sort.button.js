import React from 'react'

const SortBtn = () => {
  return (
    <div>
      <button type="button" id="sort-price" value="price">by price</button>
      <button type="button" id="sort-name" value="name">by name</button>
    </div>
  )
}

export default SortBtn