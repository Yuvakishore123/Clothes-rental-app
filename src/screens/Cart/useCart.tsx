import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartProducts} from '../../redux/slice/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeFromCart} from '../../redux/actions/actions';
import {checkoutApi, url} from '../../constants/Apis';
import {Alert} from 'react-native';
function useCart() {
  // const productId = useSelector(state => state.CartReducer.productId);
  const cartData = useSelector(state => state.CartProducts.data);
  useEffect(() => {
    dispatch(fetchCartProducts());
  }, []);
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
      .then(response => response.json())
      .then(data => {
        // console.log('Item removed from cart:', data);
        dispatch(removeFromCart(productId));
        Alert.alert('Item Removed from cart');
      })
      .catch(error => {
        console.error(error);
        const errorMessage = `Error removing item from cart: ${error.message}`;
        // Handle the error and display a more informative error message to the user
        Alert.alert(errorMessage);
      });
  };

  const dispatch = useDispatch();
  const CartProducts = useSelector(state => state.CartProducts.data);
  console.log(JSON.stringify(CartProducts));
  console.log('cart succes');
  return {CartProducts, handleCheckout, handleRemove};
}
export default useCart;
