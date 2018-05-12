import { FETCH_PRODUCTS } from '../actions/types';
import { List, Map } from 'immutable';

const INITIAL_STATE = Map({
  products: List()
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state.set('products', action.payload.data);
    default:
      return state;
  }
};
