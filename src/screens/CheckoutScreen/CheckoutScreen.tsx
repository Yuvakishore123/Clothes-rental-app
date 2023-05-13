/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import useCheckout from './useCheckout';
import style from './CheckoutScreenStyle';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
type Props = {
  route: {name: string};
  navigation: any;
};
const Cart = ({navigation}: Props) => {
  // const {selectedAddress, setSelectedAddress} = useState('No Selected Address');
  const {
    setIsCheckedArray,
    selectedAddressIndex,
    CartProducts,
    handlePayment,
    handleCheckboxChange,
    refreshing,
    onRefresh,
    addressList,
    isCheckedArray,
    isChecked,
  } = useCheckout();
  const cartData = useSelector(state => state.CartProducts.data);
  console.log('johnwesly', addressList);
  if (!CartProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: Colors.main,
        }}>
        <Image
          source={require('../../../assets/LoginImage.png')}
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Text style={{color: Colors.iconscolor}}>The Items are Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <View style={{width: 90, height: 29, left: 65, marginTop: 40}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={style.backBtn}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialIcon
              name="arrow-back-ios"
              color={Colors.iconscolor}
              size={20}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#3E54AC',
              fontSize: 15,
              fontFamily: 'poppins',
              fontWeight: 'bold',
              marginLeft: 14,
            }}>
            CheckOut
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ScrollView
            style={style.mainContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {cartData?.cartItems?.map(
              (
                item: {
                  rentalEndDate: ReactNode;
                  rentalStartDate: ReactNode;
                  product: {
                    imageURL: any;
                    name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    id: any;
                    size:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    price: string;
                  };
                },
                index: React.Key | null | undefined,
              ) => (
                <View key={index} style={style.cardContainer}>
                  <Image source={{uri: item.imageUrl}} style={style.image} />
                  <View style={style.cardTextContainer}>
                    <Text style={style.productname}>{item.product.name}</Text>
                    <Text style={style.name}>Rent From</Text>
                    <View style={{flexDirection: 'row'}}>
                      <View style={style.DateContainer}>
                        <Text style={style.DateTxt}>
                          {item.rentalStartDate}
                        </Text>
                      </View>
                      <View style={style.DateContainer}>
                        <Text style={style.DateTxt}>{item.rentalEndDate}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ),
            )}
          </ScrollView>
          <View style={style.addresscard}>
            <Text style={style.addressText}>Select Address</Text>
            <Text
              style={style.addresschangeText}
              onPress={() => {
                navigation.navigate('Owneraddresspage');
              }}>
              Add Address
            </Text>
          </View>
          {/* <Text style={{margin: 5, width: '100%'}}>{selectedAddress}</Text> */}
          {addressList &&
            addressList.map((item, index) => (
              <View key={index} style={style.card}>
                <View>
                  <Text style={style.city}>
                    {'Address: ' + item.addressLine1}
                  </Text>
                  <Text style={style.input}>{'State: ' + item.state}</Text>
                  <Text style={style.input}>
                    {'Postal Code: ' + item.postalCode}
                  </Text>
                  <Text style={style.input}>{'Postal Code: ' + item.city}</Text>
                  <Text style={style.stateName}>
                    {'Country: ' + item.country}
                  </Text>
                </View>
                <View style={style.containerCheckbox}>
                  <Text style={style.textCheckbox}>Delivery Address</Text>
                  <CheckBox
                    checked={selectedAddressIndex === index}
                    onPress={() => handleCheckboxChange(index)}
                    checkedColor="#3E54AC"
                    containerStyle={style.checkboxContainer}
                    size={24}
                  />
                </View>
              </View>
            ))}
          <View style={{marginTop: 10, padding: 20}}>
            <Text style={{color: '#3E54AC', fontWeight: '600', fontSize: 18}}>
              Grand Total
            </Text>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  width: 320,
                  backgroundColor: '#3E54AC1A',
                  height: 50,
                  borderRadius: 5,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
                  Total Amount
                </Text>
                <Text
                  style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
                  {' '}
                  ₹ {cartData.totalCost}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={style.PaymentButton}
              onPress={handlePayment}>
              <Text style={style.PaymentButtonText}>Proceed to Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Cart;
