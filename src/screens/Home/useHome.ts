/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUserProducts} from '../../redux/slice/userProductSlice';
import { url } from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeFromWishlist } from '../../redux/actions/actions';
import { Alert } from 'react-native';
function useHome() {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchUserProducts());
  }, []);
  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchUserProducts());
    setRefreshing(false);
  };
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

  const dispatch = useDispatch();
  const WishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log(JSON.stringify(WishlistProducts));
  return {WishlistProducts, onRefresh, refreshing, removefromWishlist};
}
export default useHome;
