import { combineReducers } from 'redux';
import fruitsItems from './items';
import products from './products';

const reducer = combineReducers({
  fruitsItems,
  products
});

export default reducer;
