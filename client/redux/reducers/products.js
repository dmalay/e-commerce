import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_CURRENCY = 'SET_CURRENCY'

const initialState = {
  productCards: [],
  currency: 'EUR',
  rates: {},
  method: '',
  basket: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        productCards: action.productCards
      }
    }
    case SET_CURRENCY: {
      return {
        ...state,
        currency: action.data,
        rates: action.rates
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
