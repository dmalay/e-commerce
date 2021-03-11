import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './common/header'
import { getProducts } from '../redux/reducers/products'
import Card from './common/card'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const productData = useSelector((s) => s.products.productCards)

  return (
    <div>
      <Head title="HomePage" />
      <Header />
      <div>
        {productData.map((it) => {
          return (
            <div key={it.id}>
              <Card list={it} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
