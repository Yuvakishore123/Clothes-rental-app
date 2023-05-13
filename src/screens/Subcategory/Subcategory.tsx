/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {url} from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';
import styles from './subcategoryStyles';
import Colors from '../../constants/Colors';
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
        }}>
        <Lottie
          source={require('../../../assets/loading.json')}
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
    <ScrollView style={{backgroundColor: 'black'}}>
      <TouchableOpacity
        style={styles.backBtn}
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
      <Text style={styles.textStyle}>Shop by Subcategories</Text>
      {loading ? (
        <View style={styles.loaderContainer}>
          <Lottie source={require('../../../assets/loading.json')} autoPlay />
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
                <View style={styles.categoryBox}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{uri: item.imageUrl}}
                      style={styles.categoryImage}
                    />
                  </View>
                  <View>
                    <Text style={styles.categoryText}>
                      {item.subcategoryName}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '90%',
                      position: 'absolute',
                      marginLeft: '50%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Icon
                      name="arrow-forward-ios"
                      size={20}
                      style={styles.productforwardios}
                    />
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
