import { ADD_TO_CART } from '../actions/types';
import { List, Map, fromJS, toJS } from 'immutable';

const INITIAL_STATE = Map({
  cartItems: List()
});

// they are the same

/* const INITIAL_STATE = fromJS({
  cartItems: []
});
*/

function addToCart(state, action) {
  const cartItemIndex = state
    .get('cartItems')
    .findIndex(item => item._id === action.item._id);
  if (cartItemIndex < 0) {
    return state.update('cartItems', list => list.push(action.item));
  }
  return state;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    default:
      return state;
  }
};
