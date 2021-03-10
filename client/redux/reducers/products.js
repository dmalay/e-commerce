import axios from 'axios'
import sortData from './products.util'

const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_CURRENCY = 'SET_CURRENCY'
const SET_SORT = 'SET_SORT'

const initialState = {
  productCards: [],
  currency: 'EUR',
  rates: {},
  method: {},
  basket: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      const { productCards } = action
      return {
        ...state,
        productCards
      }
    }
    case SET_CURRENCY: {
      const { currency, rates } = action
      return {
        ...state,
        currency,
        rates

      }
    }
    case SET_SORT: {
      const { productCards, method} = action
      return {
        ...state,
        productCards,
        method
      }
    }
    default:
      return state
  }
}

export function getProducts() {
  return (dispatch) => {
    axios.get('/api/v1/products').then(({ data }) => {
      dispatch({ type: GET_PRODUCTS, productCards: data })
    })
  }
}

export function setCurrency(currency) {
  return (dispatch) => {
    axios.get('/api/v1/rates').then(({ data }) => {
      dispatch({ type: SET_CURRENCY, data: currency, rates: data.rates })
    })
  }
}

export function setSortMethod(method) {

  return (dispatch, getState) => {
    const store = getState()
    const {productCards } = store.products
    const sortMethod = JSON.parse(method)
    const sortedCards = sortData(productCards, sortMethod)
    dispatch({ type: SET_SORT, productCards: sortedCards, method: sortMethod })
  }
}
