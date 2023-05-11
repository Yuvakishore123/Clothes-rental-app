/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Carousal from './Carousal';
import {
  postProductToAPI,
  postProductToCartAPI,
} from '../../redux/actions/actions';

import style from './homeStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import useHome from './useHome';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
type Props = {
  route: {name: string};
  navigation: any;
};
const Homescreen = ({navigation}: Props) => {
  const dispatch = useDispatch();

  const UserProducts = useHome();
  const {
    refreshing,
    onRefresh,
    removefromWishlist,
    searchQuery,
    searchProducts,
    setSearchQuery,
    loading,
    // recommendations,
  } = useHome();
  const allProducts = useSelector(state => state.UserProducts.data);
  const [showModal, setShowModal] = useState(false);
  const [wishlistList, setWishlistList] = useState([]);

  // console.log(allProducts);
  // const handleHeartClick = item => {
  //   dispatch(postProductToAPI(item));
  //   console.log('success');
  // };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  if (!UserProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Lottie
          source={require('../../../Assets/loading.json')}
          autoPlay
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Text>The Items are Loading...</Text>
      </View>
    );
  }

  console.log('indranil', allProducts);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ECF2FF',
        overflow: 'scroll',
      }}>
      {loading ? (
        <SkeletonPlaceholder>
          <View
            style={{
              backgroundColor: Colors.main,
              height: 900,
              width: 400,
            }}>
            <Text
              style={{
                marginLeft: 26,
                marginTop: 10,
                fontWeight: '900',
                fontFamily: 'poppins',
                fontSize: 15,
                color: '#3E54AC',
              }}></Text>

            <View style={style.searchInputContainer}>
              <TextInput
                style={{fontSize: 20, paddingLeft: 10, color: 'black'}}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                height: 200,
                width: 400,
                borderRadius: 40,
              }}></View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                color: '#3E54AC',
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                fontFamily: 'poppins',
              }}></Text>
            <View
              style={{
                borderBottomColor: '#3E54AC',
                borderBottomWidth: 1,
                marginHorizontal: 154,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.main,
                flexWrap: 'wrap',
              }}>
              {/* Other code */}
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginTop: 20,
                    // marginLeft: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 50,
                    flexWrap: 'wrap',
                    // justifyContent: 'space-between',
                    backgroundColor: Colors.main,
                  }}>
                  <View style={style.container}>
                    <TouchableOpacity>
                      <View style={style.imageContainer}>
                        <Text style={style.image}></Text>
                      </View>
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      <View style={style.cardTextContainer}>
                        <Text style={style.name}></Text>
                      </View>
                      <View style={style.textContainer}>
                        <Text style={style.price}></Text>
                        <TouchableOpacity style={style.rentButton}>
                          <Text style={style.rentText}></Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={style.wishlistButton}></TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 50,
                    // marginLeft: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 50,
                    flexWrap: 'wrap',
                    // justifyContent: 'space-between',
                    backgroundColor: Colors.main,
                  }}></View>
              </View>
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#ECF2FF',
          }}>
          <Text
            style={{
              marginLeft: 26,
              marginTop: 10,
              fontWeight: '900',
              fontFamily: 'poppins',
              fontSize: 15,
              color: '#3E54AC',
            }}>
            Leap
            <View style={style.searchInputContainer}>
              <Icon
                name="search-sharp"
                size={30}
                style={{marginLeft: 20, color: Colors.iconscolor}}
              />

              <TextInput
                placeholder="Search"
                style={{fontSize: 20, paddingLeft: 10, color: 'black'}}
                onChangeText={text => {
                  setSearchQuery(text);
                  // searchProducts(text);
                }}
                onSubmitEditing={() => searchProducts(searchQuery)}
              />
            </View>
          </Text>
          {/* <Header title={'Leap'} /> */}
          <Carousal />
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                color: '#3E54AC',
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                fontFamily: 'poppins',
              }}>
              Products For You
            </Text>
            <View
              style={{
                borderBottomColor: '#3E54AC',
                borderBottomWidth: 1,
                marginHorizontal: 154,
                marginTop: 10,
              }}
            />
          </View>
          <SafeAreaView style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>
              <FlatList
                data={allProducts}
                nestedScrollEnabled={true} //changes
                // data={searchResults.length > 0 ? searchResults : allProducts}
                keyExtractor={item => item.id}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, id}) => {
                  return (
                    <View style={style.container}>
                      <TouchableOpacity
                        key={item.id}
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
                          {/* <TouchableOpacity
                            style={style.rentButton}
                            onPress={() => {
                              // dispatch(addItemToCart(item));
                              // dispatch(postProductToCartAPI({...item}));
                            }}>
                            <Text style={style.rentText}>Rent</Text>
                          </TouchableOpacity> */}
                        </View>
                      </View>
                      <TouchableOpacity
                        style={style.wishlistButton}
                        onPress={() => {
                          if (wishlistList.includes(item.id)) {
                            setWishlistList(
                              wishlistList.filter(id => id !== item.id),
                            );
                          } else {
                            setWishlistList([...wishlistList, item.id]);
                            dispatch(postProductToAPI({...item}));
                          }
                        }}>
                        {wishlistList.includes(item.id) ? (
                          <Image
                            source={require('../../../Assets/fillheart.png')}
                            style={{width: 24, height: 24}}
                          />
                        ) : (
                          <Image
                            source={require('../../../Assets/heart.png')}
                            style={{width: 24, height: 24}}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </SafeAreaView>
        </View>
      )}
      <CustomModal
        showModal={showModal}
        onClose={closeModal}
        message="Need to set Rental dates!"
      />
    </SafeAreaView>
  );
};

export default Homescreen;
