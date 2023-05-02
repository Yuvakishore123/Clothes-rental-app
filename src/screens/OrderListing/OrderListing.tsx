import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const sessionId =
    'cs_test_a1aVfsbdqM3qLfVog6VmDa1ySrgi6giIZjRWWsL0RAWLjxPzaKLP9U2XQN';

  useEffect(() => {
    const fetchOrders = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await fetch(
          `https://327a-103-16-70-25.ngrok-free.app/api/v1/order/list?sessionId=${sessionId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await response.json();
        setOrders(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [sessionId]);

  const renderItem = ({item}) => (
    <View>
      <Text>Order ID: {item.id}</Text>
      <Text>Amount: {item.totalPrice}</Text>
      <FlatList
        data={item.orderItems}
        renderItem={({item: orderItem}) => (
          <View>
            <Text>Product Name: {orderItem.product.name}</Text>
            <Text>Quantity: {orderItem.quantity}</Text>
            <Text>Price: {orderItem.price}</Text>
          </View>
        )}
        keyExtractor={orderItem => orderItem.id.toString()}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default OrdersScreen;
