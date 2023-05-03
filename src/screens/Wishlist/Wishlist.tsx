/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
// import CartItem from '../Cart/CartItem';
import useWishlist from './useWishlist';
import style from './wishlistStyles';
import {
  addItemToCart,
  addToWishlist,
  removeFromCart,
} from '../../redux/actions/actions';

import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
type Props = {
  route: {name: string};
  navigation: any;
};
const Wishlist = ({navigation}: Props) => {
  // const {cartData, handleRemoveFromWishlist, handleAddToCart} = useWishlist();
  const dispatch = useDispatch();

  const {WishlistProducts, removefromWishlist} = useWishlist();
  const [wishlistList, setWishlistList] = useState([]);
  const {refreshing, onRefresh} = useWishlist();
  const allWishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log('hey', allWishlistProducts);
  const isLoading = useSelector(state => state.WishlistProducts.isLoader);
  const error = useSelector(state => state.WishlistProducts.error);

  if (!WishlistProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: Colors.main,
        }}>
        <Image
          source={require('../../../Assets/LoginImage.png')}
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
    <View style={style.maincontainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={style.textConatiner}>
          <Text style={style.textStyle}>Wishlist</Text>
        </View>
        {allWishlistProducts.length === 0 ? (
          <>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                backgroundColor: Colors.main,
              }}>
              <Image
                source={require('../../../Assets/wishlist.jpg')}
                style={{
                  height: 200,
                  width: 200,
                  marginTop: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  marginBottom: 20,
                  color: Colors.iconscolor,
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                Your wishlist is empty
              </Text>
            </View>
          </>
        ) : (
          <View style={style.maincontainer}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#ECF2FF',
                flexWrap: 'wrap',
              }}>
              {/* Other code */}
              <View
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: 100,
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {allWishlistProducts &&
                  allWishlistProducts.map((item, index) => {
                    return (
                      <View style={style.container} key={index}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('UProductDetails', {
                              product: item,
                            })
                          }>
                          <View style={style.imageContainer}>
                            <Image
                              source={{uri: item.imageURL[0]}}
                              style={style.image}
                            />
                          </View>
                        </TouchableOpacity>
                        <View style={style.cardTextContainer}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text style={style.name}>{item.name}</Text>
                            <TouchableOpacity
                              style={style.addButton}
                              onPress={() => {}}>
                              <Text
                                style={{
                                  color: '#3E54AC',
                                  fontWeight: 'bold',
                                  fontSize: 12,
                                }}>
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View style={style.textContainer}>
                            <Text style={style.price}>{'₹' + item.price}</Text>
                            <TouchableOpacity
                              style={style.rentButton}
                              onPress={() =>
                                dispatch(postProductToCartAPI({...item}))
                              }>
                              <Text style={style.rentText}>Rent</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={style.wishlistButton}
                          onPress={() => removefromWishlist(item.id)}>
                          <Image
                            source={require('../../../Assets/fillheart.png')}
                            style={{width: 24, height: 24}}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Wishlist;
