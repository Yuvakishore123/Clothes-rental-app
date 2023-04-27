import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToWishlist, postProductToAPI} from '../../redux/actions/actions';
import style from './categoryStyles';

const CategoryProducts = ({route}) => {
  const dispatch = useDispatch();
  const {categoryId} = route.params;
  const [subcategories, setSubcategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSubcategories = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      const subcategoriesData = response.data;
      setSubcategories(subcategoriesData);
    };
    fetchSubcategories();
  }, [categoryId]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CategoryProducts', {categoryId: item.id})
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
            // onPress={() =>
            //   navigation.navigate('UProductDetails', {product: item})
            // }
          >
            <View style={style.imageContainer}>
              <Image
                source={{uri: item.image}}
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
              <Text style={style.name}>{item.title}</Text>
              <TouchableOpacity style={style.addButton} onPress={() => {}}>
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
                // onPress={() => {
                //   dispatch(addItemToCart(item));
                // }}
              >
                <Text style={style.rentText}>Rent</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <TouchableOpacity
            style={style.wishlistButton}
            onPress={() => {
              if (wishlistList.includes(item.id)) {
                setWishlistList(wishlistList.filter(id => id !== item.id));
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
          </TouchableOpacity> */}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={style.textConatiner}>
        <Text style={style.textStyle}>Category</Text>
      </View>
      <FlatList
        data={subcategories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={style.listContainer}
      />
    </View>
  );
};

export default CategoryProducts;
