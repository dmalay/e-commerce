import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import SortBtn from './sortButton'
import CurrencyBtn from './currencyButton'
import ToCartIcon from './toCartIcon'
import { addLog } from '../../redux/reducers/logs'

const Header = () => {
  const dispatch = useDispatch()
  const setOnClick = () => {
    dispatch(addLog(`navigated to "/" page`))
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-700 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <Link to="/" onClick={setOnClick}>Abibas</Link>
      </div>
      <SortBtn />
      <CurrencyBtn />
      <ToCartIcon />
    </div>
  )
}

export default Header
