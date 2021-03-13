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
      <div className="container mx-auto px-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {productData.map((it) => {
            return (
              <div key={it.id}>
                <Card list={it} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
