/* eslint-disable react-hooks/exhaustive-deps */
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

import {Dispatch, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWishlistProducts} from '../../redux/slice/wishlistSlice';
import {REMOVE_FROM_WISHLIST, removeFromWishlist} from '../../redux/actions/actions';
import {url} from '../../constants/Apis';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
function useWishlist() {
  const [refreshing, setRefreshing] = useState(false);

  const removefromWishlist = async (productId: any) => {
    const token = await AsyncStorage.getItem('token');
    console.log('chiranjeevi', productId);
    fetch(`${url}/wishlist/removebyid?productId=${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log('Item removed from cart:', data);
        dispatch(removeFromWishlist(productId));
        Alert.alert('Item Removed from Wishlist');
      })
      .catch(error => {
        console.error(error);
        const errorMessage = `Error removing item from Wishlist: ${error.message}`;
        // Handle the error and display a more informative error message to the user
        Alert.alert(errorMessage);
      });
  };
  useEffect(() => {
    dispatch(fetchWishlistProducts());
  }, []);
  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchWishlistProducts());
    setRefreshing(false);
  };

  const dispatch = useDispatch();
  const WishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log(JSON.stringify(WishlistProducts));
  console.log('wishlist succes');
  return {WishlistProducts, removefromWishlist, refreshing, onRefresh};
}
export default useWishlist;
