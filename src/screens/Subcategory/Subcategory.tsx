/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {url} from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
const SubcategoryList = ({route}) => {
  const {categoryId} = route.params;
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchSubcategories = async () => {
      const token = await AsyncStorage.getItem('token'); // replace with your actual token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `${url}/subcategory/listbyid/${categoryId}`,
        config, // pass the config object as the second argument
      );
      const subcategoriesData = response.data;
      setSubcategories(subcategoriesData);
      setLoading(false);
    };

    fetchSubcategories();
  }, [categoryId]);
  if (loading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          // backgroundColor: '#3E54AC',
        }}>
        <Lottie
          source={require('../../../Assets/loading.json')}
          autoPlay
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
        />
        <Text style={{color: '#3E54AC', fontSize: 15, fontWeight: '600'}}>
          The Items are Loading...
        </Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={styles.textContainers}>
        <View style={styles.dheader}>
          <Icon
            name="arrow-back-ios"
            size={24}
            color="#3E54AC"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.textStyle}>Sub Category</Text>
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <Lottie source={require('../../../Assets/loading.json')} autoPlay />
        </View>
      ) : (
        <View>
          {subcategories &&
            subcategories.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('CategoryProducts', {
                    subcategoryId: item.id,
                  })
                }>
                <View style={styles.SubCategoryBox}>
                  <Image
                    style={{height: 107, width: 340, opacity: 0.8}}
                    source={{uri: item.imageUrl}}
                  />
                  <View>
                    <Text style={styles.SubCategoryText}>
                      {item.subcategoryName}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </ScrollView>
  );
};
export default SubcategoryList;
const styles = StyleSheet.create({
  SubCategoryBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    height: 90,
    backgroundColor: '#DBE2F7',
    opacity: 50,
    borderRadius: 8,
    // backgroundColor: 'pink',
    marginLeft: 25,
    marginTop: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
  loaderContainer: {
    flex: 1,
    height: 200,
    width: 200,
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#394887',
    fontSize: 20,
    // marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  SubCategoryText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    zIndex: 1,
    marginTop: -60,
  },
  textContainers: {
    color: '#394887',
    flexDirection: 'row',
  },
  dheader: {
    marginTop: 23,
    // top: 90,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 1,
    marginLeft: 10,
  },
});
