// import { useSelector, useDispatch } from 'react-redux';
// import { addItemToCart, removeFromCart, removeFromWishlist } from '../../redux/actions/actions';

// export const useWishlist = () => {
//   const cartData = useSelector(state => state.WishlistReducer);
//   const dispatch = useDispatch();

//   const handleRemoveFromWishlist = (index) => {
//     dispatch(removeFromWishlist(index));
//   };

//   const handleAddToCart = (x) => {
//     dispatch(addItemToCart(x));
//   };

//   return { cartData, handleRemoveFromWishlist, handleAddToCart };
// };

import {Dispatch, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWishlistProducts} from '../../redux/slice/wishlistSlice';
import {REMOVE_FROM_WISHLIST} from '../../redux/actions/actions';
import {url} from '../../constants/Apis';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
function useWishlist() {
  const removeFromWishlist = async item => {
    try {
      const token = await AsyncStorage.getItem('token');
      // Make API call to remove product from the wishlist
      const response = await axios.delete(`${url}/wishlist/remove`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      console.log(response.data);

      // Dispatch action to update wishlist state in Redux store
      dispatch({type: REMOVE_FROM_WISHLIST, payload: response.data});
    } catch (error) {
      console.log('remove from wishlist error', error);
    }
  };

  useEffect(() => {
    dispatch(fetchWishlistProducts());
  }, []);

  const dispatch = useDispatch();
  const WishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log(JSON.stringify(WishlistProducts));
  console.log('wishlist succes');
  return {WishlistProducts, removeFromWishlist};
}
export default useWishlist;
