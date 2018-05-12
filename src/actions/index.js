import axios from 'axios';
import { FETCH_PRODUCTS, ADD_TO_CART } from './types';

export const fetchProducts = () => {
  return dispatch => {
    axios
      .get(
        'https://api.mlab.com/api/1/databases/products/collections/products?apiKey=QzYgogyDY6w3wGUkVm1nvbrgoMKwKTlI'
      )
      .then(res =>
        dispatch({
          type: FETCH_PRODUCTS,
          payload: res
        })
      );
  };
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item
  };
};
