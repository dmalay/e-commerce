import React from 'react'
import { Link } from 'react-router-dom'

import SortBtn from './sort.button'
import CurrencyBtn from './currency.button'
import Checkout from './checkout'

const Header = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-700 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <Link>
          Abibas
        </Link>
      </div>
      <SortBtn />
      <CurrencyBtn />
      <Checkout />
    </div>
  )
}

export default Header