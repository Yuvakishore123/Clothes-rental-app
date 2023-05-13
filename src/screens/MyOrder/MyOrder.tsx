/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './Myorderstyles';
import Colors from '../../constants/Colors';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
import {fetchOrderProducts} from '../../redux/slice/orderSlice';
import Lottie from 'lottie-react-native';
type Props = {
  route: {name: string};
  navigation: any;
};

const MyOrder = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const orderData = useSelector(state => state.OrderProducts.data);
  const OrderProducts = useSelector(state => state.OrderProducts.data);

  console.log('orderItems:', orderData);

  const [showModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    dispatch(fetchOrderProducts());
    setRefreshing(false);
  };

  useEffect(() => {
    dispatch(fetchOrderProducts());
  }, [dispatch]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!OrderProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: Colors.main,
        }}>
        <Lottie
          source={require('../../../assets/order1.json')}
          autoPlay
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: -20,
          }}
        />
        <Text style={{color: Colors.iconscolor}}>The Items are Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{flex: 1, backgroundColor: Colors.main}}>
        <View
          style={{
            width: 120,
            height: 29,
            left: 65,
            marginTop: 40,
          }}>
          <View style={{}}>
            <Text
              style={{
                color: '#3E54AC',
                fontSize: 20,
                fontFamily: 'poppins',
                fontWeight: 'bold',
              }}>
              Your Orders
            </Text>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <ScrollView
            style={style.mainContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {OrderProducts.length === 0 ? (
              <View style={style.noAddressContainer1}>
                <View style={style.titleTextContainer1}>
                  <Lottie
                    style={style.imageS1}
                    autoPlay
                    source={require('../../../assets/order2.json')}
                  />
                </View>
                <View style={style.textContainer1}>
                  <Text style={style.noAddressText1}>
                    Hey,it feels so light!
                  </Text>
                </View>
              </View>
            ) : (
              OrderProducts.map((order: any, _index: number) => (
                <View key={order.id} style={style.cardContainer}>
                  {order.orderItems.map((item: any, i: number) => (
                    <>
                      <ScrollView
                        key={i}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={{flexDirection: 'row', width: 290}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            // height: 100,
                          }}>
                          <Image
                            source={{uri: item.imageUrl}}
                            style={style.image}
                          />
                          <View>
                            <View>
                              <Text style={style.orderDate}>
                                {item.createdDate}
                              </Text>
                            </View>
                            <View style={style.cardTextContainer}>
                              <Text style={style.productname}>
                                {item.product.name}
                              </Text>
                              <TouchableOpacity style={style.RemoveButton}>
                                <Text style={style.rentedname}>Rented</Text>
                              </TouchableOpacity>
                              <View style={{flexDirection: 'row'}} />
                              <Text style={style.name}>Size</Text>
                              <View style={style.productSizeBox}>
                                <Text style={style.detailsdescription}>
                                  {item.product.size}
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginLeft: -50,
                                }}>
                                <Text style={style.priceText}>
                                  {'₹' + item.product.price}
                                </Text>
                                <View style={style.quantityContainer}>
                                  {/* <View style={{alignItems: 'center', bottom: 2}}> */}
                                  <View
                                    style={{alignItems: 'center', bottom: 2}}>
                                    <Text style={style.quantityTxt}>
                                      {item.quantity}
                                    </Text>
                                  </View>
                                  {/* </View> */}
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </ScrollView>
                    </>
                  ))}
                </View>
              ))
            )}
          </ScrollView>
        </View>
        <CustomModal
          showModal={showModal}
          onClose={closeModal}
          message={'OrderId'}
        />
      </View>
    </>
  );
};

export default MyOrder;
