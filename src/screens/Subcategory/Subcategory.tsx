// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import CategoryProducts from '../CategoryProducts/CategoryProducts';

// const Subcategory = () => {
//   const navigation = useNavigation();
//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.navigate('CategoryProducts')}>
//         <Text>SubCategory..........</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={navigation.goBack}>
//         <Text>Go back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Subcategory;

// const styles = StyleSheet.create({});
//------------------------working code down
// import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, TouchableOpacity} from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';

// const SubcategoryList = ({route}) => {
//   const {categoryId} = route.params;
//   const [subcategories, setSubcategories] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       const response = await axios.get(
//         `https://6e07-106-51-70-135.ngrok-free.app/subcategory/listbyid/${categoryId}`,
//       );
//       const subcategoriesData = response.data;
//       setSubcategories(subcategoriesData);
//     };
//     fetchSubcategories();
//   }, [categoryId]);

//   const renderItem = ({item}) => (
//     <TouchableOpacity
//       onPress={() =>
//         navigation.navigate('CategoryProducts', {categoryId: item.id})
//       }>
//       <View>
//         <Text>{item.subcategoryName}</Text>
//         <Text>{item.description}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View>
//       <FlatList
//         data={subcategories}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default SubcategoryList;
//---------------

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import { url } from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SubcategoryList = ({route}) => {
  const {categoryId} = route.params;
  const [subcategories, setSubcategories] = useState([]);
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
    };

    fetchSubcategories();
  }, [categoryId]);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CategoryProducts', {categoryId: item.id})
      }>
      {/* <View style={styles.container}>
      <Text style={styles.text}>SubCategory</Text>
    </View> */}
      <View style={styles.SubCategoryBox}>
        {
          <Image
            style={styles.image}
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
          />
        }
        <View>
          <Text style={styles.SubCategoryText}>{item.subcategoryName}</Text>
          {/* //<Text>{item.description}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={styles.textContainers}>
        <Text style={styles.textStyle}>Sub Category</Text>
      </View>
      <FlatList
        data={subcategories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
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
    marginLeft: 20,
    marginTop: 25,
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
  textStyle: {
    color: '#394887',
    fontSize: 20,
    marginLeft: 40,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  SubCategoryText: {
    color: '#394887',
    fontSize: 18,
    fontWeight: '600',
  },
  textContainers: {
    color: '#394887',
  },
});
