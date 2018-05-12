import { combineReducers } from 'redux-immutable';
import productReducer from './products';
import cartReducer from './cart';

export default combineReducers({
  productReducer,
  cartReducer
});
