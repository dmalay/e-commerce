import React from 'react'
import { Link } from 'react-router-dom'

import SortBtn from './sortButton'
import CurrencyBtn from './currencyButton'
import ToCartIcon from './toCartIcon'

const Header = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-700 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <Link to="/">Abibas</Link>
      </div>
      <SortBtn />
      <CurrencyBtn />
      <ToCartIcon />
    </div>
  )
}

export default Header
