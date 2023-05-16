/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {postProductToAPI} from '../../redux/actions/actions';
import style from './categoryStyles';
import {url} from '../../constants/Apis';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import Colors from '../../constants/Colors';
const CategoryProducts = ({route}) => {
  const dispatch = useDispatch();
  const {subcategoryId} = route.params;
  const [subcategories, setSubcategories] = useState([]);
  const navigation = useNavigation();
  const [wishlistList, setWishlistList] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      const token = await AsyncStorage.getItem('token'); // replace with your actual token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `${url}/product/listBySubcategoryId/${subcategoryId}`,
        config, // pass the config object as the second argument
      );
      const subcategoriesData = response.data;
      setSubcategories(subcategoriesData);
    };

    fetchSubcategories();
  }, [subcategoryId]);

  return (
    <ScrollView style={style.maincontainer}>
      <TouchableOpacity
        style={style.backBtn}
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialIcon
          name="md-chevron-back"
          color={Colors.white}
          size={26}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <Text style={style.textStyle}>Products</Text>
      <View style={{flex: 1}}>
        {subcategories.length === 0 ? (
          <View>
            <Lottie
              style={{flex: 1, width: 400}}
              source={require('../../../assets/productpage.json')}
              autoPlay
            />
            <Text style={style.loadtextStyle}>
              Products are not Available Right Now
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: '100%',
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                flexWrap: 'wrap',
              }}>
              {subcategories &&
                subcategories.map(item => (
                  <TouchableOpacity
                    style={{width: '50%'}}
                    key={item.id} // Add a unique key prop
                    onPress={() =>
                      navigation.navigate('CategoryProducts', {
                        subcategoryId: item.id,
                      })
                    }>
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
                        <View style={style.Cartcontents}>
                          <Text style={style.name}>{item.name}</Text>
                        </View>

                        <View style={style.textContainer}>
                          <Text style={style.price}>{'₹' + item.price}</Text>
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
                          <MaterialIcons
                            size={20}
                            color={'red'}
                            name="cards-heart"
                          />
                        ) : (
                          <MaterialIcons
                            size={20}
                            color={'white'}
                            name="cards-heart"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CategoryProducts;
