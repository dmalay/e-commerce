import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

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
