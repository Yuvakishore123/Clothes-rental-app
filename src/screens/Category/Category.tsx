/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './categoryStyles';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import axios from 'axios';
import {url} from '../../constants/Apis';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(`${url}/category/list`)
      .then(response => {
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Subcategory', {categoryId: item.id})}>
      <View style={styles.categoryBox}>
        <Image
          source={{uri: item.imageUrl}}
          style={{height: 107, width: 340, opacity: 0.7}}
        />
        <View>
          <Text style={styles.categoryText}>{item.categoryName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.maincontainer}>
      <View style={style.textConatiner}>
        <Text style={style.textStyle}>Category</Text>
      </View>
      {loading ? (
        <View style={style.loaderContainer}>
          <Lottie source={require('../../../Assets/loading.json')} autoPlay />
        </View>
      ) : (
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    height: 107,
    backgroundColor: '#567B89',
    borderRadius: 10,
    // backgroundColor: 'pink',
    marginLeft: 25,
    marginTop: 40,
    padding: 15,
  },

  categoryText: {
    color: '#ECF2FF',
    fontSize: 20,
    fontWeight: '800',
    zIndex: 1,
    marginTop: -45,
  },
});
