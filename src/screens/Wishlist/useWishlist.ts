import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWishlistProducts} from '../../redux/slice/wishlistSlice';
import {removeFromWishlist} from '../../redux/actions/actions';
import {url} from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function useWishlist() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
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
        openModal();
      })
      .catch(error => {
        console.error(error);
        const errorMessage = `Error removing item from Wishlist: ${error.message}`;
        // Handle the error and display a more informative error message to the user
        Alert.alert(errorMessage);
      });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchWishlistProducts());
    });
    return unsubscribe;
  }, [navigation]);
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
  return {
    WishlistProducts,
    removefromWishlist,
    refreshing,
    onRefresh,
    closeModal,
    showModal,
    openModal,
  };
}
export default useWishlist;
