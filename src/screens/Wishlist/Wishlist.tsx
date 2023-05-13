/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import CartItem from '../Cart/CartItem';
import useWishlist from './useWishlist';
import style from './wishlistStyles';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import Lottie from 'lottie-react-native';
type Props = {
  route: {name: string};
  navigation: any;
};
const Wishlist = ({navigation}: Props) => {
  const {
    WishlistProducts,
    removefromWishlist,
    closeModal,
    showModal,
    openModal,
  } = useWishlist();

  const {refreshing, onRefresh} = useWishlist();
  const allWishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log('hey', allWishlistProducts);

  if (!WishlistProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: Colors.main,
        }}>
        <Lottie
          source={require('../../../assets/loading.json')}
          autoPlay
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
              <Lottie
                source={require('../../../assets/wishlistanime.json')}
                autoPlay
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
                  allWishlistProducts.map(
                    (
                      item: {
                        imageUrl: any[];
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
                        price: string;
                        id: any;
                      },
                      index: React.Key | null | undefined,
                    ) => {
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
                                source={{uri: item.imageUrl[0]}}
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
                            </View>
                            <View style={style.textContainer}>
                              <Text style={style.price}>
                                {'₹' + item.price}
                              </Text>
                            </View>
                          </View>
                          <TouchableOpacity
                            style={style.wishlistButton}
                            onPress={() => removefromWishlist(item.id)}
                            onPressIn={() => openModal()}>
                            <Image
                              source={require('../../../assets/fillheart.png')}
                              style={{width: 24, height: 24}}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    },
                  )}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <CustomModal
        showModal={showModal}
        onClose={closeModal}
        message="Item Removed!"
      />
    </View>
  );
};

export default Wishlist;
