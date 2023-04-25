import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousal from './Carousal';
import UDetailScreen from '../UProductDetails/UProductDetails';
// import {postToAPI} from '../../redux/actions/actions';

// import UserProductdetails from '../UserProductDetails/UserProductDetails';

import {addToWishlist, postProductToAPI} from '../../redux/actions/actions';

import style from './homeStyles';
import Icon from 'react-native-vector-icons/Ionicons';

// import SearchIcon from '@mui/icons-material/Search';

import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  // addToWishlist,
  fetchProducts,
} from '../../redux/actions/actions';
import useHome from './useHome';
type Props = {
  route: {name: string};
  navigation: any;
};
const Homescreen = ({navigation}: Props) => {
  const dispatch = useDispatch();

  const UserProducts = useHome();
  const allProducts = useSelector(state => state.UserProducts.data);
  const isLoading = useSelector(state => state.UserProducts.isLoader);
  const error = useSelector(state => state.UserProducts.error);
  // const [wishlist, setWishlist] = useState(false);
  //chnages
  // const [wishlistList, setWishlistList] = useState([]);

  const [wishlistList, setWishlistList] = useState([]);

  // console.log(allProducts);
  // const handleHeartClick = item => {
  //   dispatch(postProductToAPI(item));
  //   console.log('success');
  // };
  const handleHeartClick = item => {
    console.log('posted');
  };

  if (!UserProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        {/* <Image
          source={require('../../../Assets/LoginImage.png')}
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        /> */}
        <Text>The Items are Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#ECF2FF'}}>
        {/* <Header title={'Leap'} /> */}
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
        </Text>

        <View style={style.searchInputContainer}>
          <Icon name="search-sharp" size={30} style={{marginLeft: 20}} />

          <TextInput
            placeholder="Search"
            style={{fontSize: 20, paddingLeft: 10}}
          />
        </View>

        <Carousal />
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
          Random Outfits
        </Text>
        <View
          style={{
            borderBottomColor: '#3E54AC',
            borderBottomWidth: 1,
            marginHorizontal: 154,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <FlatList
            data={allProducts} //changes
            keyExtractor={item => item.id}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, id}) => {
              return (
                <View style={style.container}>
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      navigation.navigate('UProductDetails', {product: item})
                    }>
                    <View style={style.imageContainer}>
                      <Image
                        source={{uri: item.imageURL}}
                        style={style.image}
                        //changes
                        // onPress={() =>
                        //   navigation.navigate('OproductDetails', {
                        //     product: products[index + 1],
                        //   })
                        // }
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
                        onPress={() => {
                          dispatch(addItemToCart(item));
                        }}>
                        <Text style={style.rentText}>Rent</Text>
                      </TouchableOpacity>
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
                        // dispatch(addToWishlist(item));

                        // dispatch(postProductToAPI(item.id));
                        dispatch(postProductToAPI({...item}));
                        // dispatch(postProductToAPI(item));
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
      </View>
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
