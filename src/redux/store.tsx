import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ProductSlice from './slice/productSlice';
import thunk from 'redux-thunk';
import Reducers from './reducers/reducers';
import authReducer from './reducers/reducers';
import {AddressReducers} from './reducers/AddressReducers';
import {ItemsReducer} from './reducers/Additemsreducers';
import SizeReducer from './reducers/sizeReducer';
import GenderReducer from './reducers/GenderReducer';
import Rolereducer from './reducers/Rolereducer';
const RootReducers = combineReducers({
  // reducers
  Reducers,
  products: ProductSlice,
  auth: authReducer,
  AddressReducers,
  ItemsReducer,
  SizeReducer,
  GenderReducer,
  Rolereducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
