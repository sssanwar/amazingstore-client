import axios from 'axios'
import stringifyObject from 'stringify-object'
import { CartItem } from '../lib/types/common.type'

const sendQuery = (query: string) => {
  return axios.post(window.appConfig['endpointUrl'] + 'api/v1/graphql', JSON.stringify({ query: query }), {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}

export const getProducts = () => sendQuery('{ products { name, id, unitPrice, promotions { id, description } } }')
export const calculateTotal = (cartItems: CartItem[]) => {
  let query = `mutation { updateCart(items: {cartItems}) { subTotal, saved, details, total } }`
  return sendQuery(query.replace('{cartItems}', stringifyObject(cartItems, { singleQuotes: false })))
}
