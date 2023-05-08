/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartProducts} from '../../redux/slice/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ADDORDER, removeFromCart} from '../../redux/actions/actions';
import {cartUpdate, checkoutApi, url} from '../../constants/Apis';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
function useCart() {
  // const {product} = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const [rentalStartDate, setRentalStartDate] = useState(new Date());
  const [rentalEndDate, setRentalEndDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchCartProducts());
    });
    return unsubscribe;
  }, [navigation]);
  const cartData = useSelector(state => state.CartProducts.data);
  useEffect(() => {
    dispatch(fetchCartProducts());
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchCartProducts());
    setRefreshing(false);
  };
  useEffect(() => {
    if (!showModal) {
      dispatch(fetchCartProducts());
    }
  }, [showModal]);
  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const cartItems = cartData?.cartItems;
      if (!cartItems || cartItems.length === 0) {
        console.log('Cart is empty, cannot update');
        return;
      }
      const items = {
        cartItems: cartItems.map(item => ({
          id: 0,
          productId: item.product.id,
          quantity: item.product.quantity,
          rentalEndDate: rentalEndDate.toISOString(),
          rentalStartDate: rentalStartDate.toISOString(),
        })),
      };
      const response = await fetch(cartUpdate, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(items),
      });
      const data = await response.json();
      console.log('Update response:', data); // log the API response for debugging
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleCheckout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      // Map the cart items to the required format
      const items = cartData?.cartItems?.map(item => ({
        price: item.product.price,
        productId: item.product.id,
        productName: item.product.name,
        quantity: item.product.quantity,
      }));

      // Make the API call to create the checkout session
      const response = await fetch(checkoutApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(items),
      });

      // Handle the response
      const data = await response.json();
      navigation.navigate('CheckoutScreen');
      console.log('Checkout Session created:', data);
    } catch (error) {
      console.error('Error creating Checkout Session:', error);
    }
  };
  const handleRemove = async (productId: any) => {
    const token = await AsyncStorage.getItem('token');
    console.log('chiranjeevi', productId);
    fetch(`${url}/cart/delete/${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      // .then(response => response.json())
      .then(data => {
        // console.log('Item removed from cart:', data);
        dispatch(removeFromCart(productId));
        openModal();
      })
      .catch(error => {
        console.error(error);
        const errorMessage = `Error removing item from cart: ${error.message}`;
        // Handle the error and display a more informative error message to the user
        Alert.alert(errorMessage);
      });
  };

  const totalPrice = 1;

  const handlePayment = () => {
    const options = {
      description: 'Payment for food items',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_live_vjRbx3MWMGxd9i',
      amount: totalPrice * 100,
      name: 'indranil',
      prefill: {
        email: 'example@example.com',
        contact: '1234567890',
        name: 'John Doe',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(paymentData => {
        // handle success
        console.log(paymentData);
        navigation.navigate('OrderStatusScreen');
        dispatch(ADDORDER(razorpayId));
      })
      .catch(error => {
        // handle failure
        // Alert.alert('Try Again');
      });
  };

  const dispatch = useDispatch();
  const CartProducts = useSelector(state => state.CartProducts.data);
  console.log(JSON.stringify(CartProducts));
  console.log('cart succes');
  return {
    CartProducts,
    handleCheckout,
    handleRemove,
    refreshing,
    setRefreshing,
    onRefresh,
    handlePayment,
    handleUpdate,
    rentalStartDate,
    rentalEndDate,
    setRentalStartDate,
    setRentalEndDate,
    openModal,
    closeModal,
    showModal,
  };
}
export default useCart;

