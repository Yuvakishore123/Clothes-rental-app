import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ProductSlice from '../slice/productSlice';
import thunk from 'redux-thunk';
import Reducers from '../reducers/reducers';
import authReducer from '../reducers/reducers';
const RootReducers = combineReducers({
  // reducers
  Reducers,
  products: ProductSlice,
  auth: authReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));

