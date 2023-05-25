// import {useEffect, useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {fetchWishlistProducts} from '../../redux/slice/wishlistSlice';
// import {removeFromWishlist} from '../../redux/actions/actions';
// import {url} from '../../constants/Apis';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Alert} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// function useWishlist() {
//   const navigation = useNavigation();
//   const [refreshing, setRefreshing] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => {
//     setShowModal(true);
//   };
//   const closeModal = () => {
//     setShowModal(false);
//   };
//   const removefromWishlist = async (productId: any) => {
//     const token = await AsyncStorage.getItem('token');
//     console.log('chiranjeevi', productId);
//     fetch(`${url}/wishlist/removebyid?productId=${productId}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         dispatch(removeFromWishlist(productId));
//         openModal();
//       })
//       .catch(error => {
//         console.error(error);
//         const errorMessage = `Error removing item from Wishlist: ${error.message}`;
//         Alert.alert(errorMessage);
//       });
//   };
//   const dispatch = useDispatch();
//   const WishlistProducts = useSelector(state => state.WishlistProducts.data);
//   console.log(JSON.stringify(WishlistProducts));
//   console.log('wishlist succes');
//   const onRefresh = async () => {
//     setRefreshing(true);
//     await dispatch(fetchWishlistProducts());
//     setRefreshing(false);
//   };
//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       return dispatch(fetchWishlistProducts());
//     });
//     return unsubscribe;
//   }, [dispatch, navigation]);
//   useEffect(() => {
//     dispatch(fetchWishlistProducts());
//   }, [dispatch]);
//   useEffect(() => {
//     if (!showModal) {
//       dispatch(fetchWishlistProducts());
//     }
//   }, [dispatch, showModal]);
//   return {
//     WishlistProducts,
//     removefromWishlist,
//     refreshing,
//     onRefresh,
//     closeModal,
//     showModal,
//     openModal,
//   };
// }
// export default useWishlist;
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWishlistProducts} from '../../redux/slice/wishlistSlice';
import {removeFromWishlist} from '../../redux/actions/actions';
import {url} from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function useWishlist() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
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
    fetch(`${url}/wishlist/remove?productId=${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        dispatch(removeFromWishlist(productId));
        openModal();
      })
      .catch(error => {
        console.error(error);
        const errorMessage = `Error removing item from Wishlist: ${error.message}`;
        Alert.alert(errorMessage);
      });
  };
  const dispatch = useDispatch();
  const WishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log(JSON.stringify(WishlistProducts));
  // const length = WishlistProducts.length();
  console.log('wishlist succes');
  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchWishlistProducts());
    setRefreshing(false);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      return dispatch(fetchWishlistProducts());
    });
    return unsubscribe;
  }, [dispatch, navigation]);
  useEffect(() => {
    dispatch(fetchWishlistProducts());
  }, [dispatch]);
  useEffect(() => {
    if (!showModal) {
      dispatch(fetchWishlistProducts());
    }
  }, [dispatch, showModal]);
  return {
    WishlistProducts,
    removefromWishlist,
    refreshing,
    onRefresh,
    closeModal,
    showModal,
    openModal,
    colorScheme,
  };
}
export default useWishlist;
