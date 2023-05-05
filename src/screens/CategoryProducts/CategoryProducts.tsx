/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {postProductToAPI} from '../../redux/actions/actions';
import style from './categoryStyles';
import {url} from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <View style={style.textConatiner}>
        <View style={style.dheader}>
          <Icon
            name="arrow-back-ios"
            size={18}
            color="#3E54AC"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={style.textStyle}>Products</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#ECF2FF', flexWrap: 'wrap'}}>
        {/* Other code */}
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 100,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            backgroundColor: '#ECF2FF',
          }}>
          {subcategories &&
            subcategories.map(item => (
              <TouchableOpacity
                key={item.id} // Add a unique key prop
                onPress={() =>
                  navigation.navigate('CategoryProducts', {
                    subcategoryId: item.id,
                  })
                }>
                <View>
                  {/* <Text>{item.subcategoryName}</Text>
        <Text>{item.title}</Text>
        <Image
          source={{uri: item.image}}
          // style={style.image}
        />

        <Text>{item.description}</Text> */}

                  <View style={style.container}>
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        navigation.navigate('UProductDetails', {product: item})
                      }>
                      <View style={style.imageContainer}>
                        <Image
                          source={{uri: item.imageUrl[0]}}
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
                            Alert.alert('Need to select Rental dates');
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
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryProducts;
