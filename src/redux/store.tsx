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
import CartReducer from './reducers/cartReducer';
import WishlistReducer from './reducers/wishlistReducer';
import UserProductSlice from './slice/userProductSlice';
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
  CartReducer,
  WishlistReducer,
  UserProducts: UserProductSlice,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
