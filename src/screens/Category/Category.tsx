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

import {useNavigation, useRoute} from '@react-navigation/native';

import Subcategory from '../Subcategory/Subcategory';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://6e07-106-51-70-135.ngrok-free.app/category/list')
      .then(response => {
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Subcategory', {categoryId: item.id})}>
      <View style={styles.categoryBox}>
        <Image source={{uri: item.imageURL}} />
        <View>
          <Text style={styles.categoryText}>{item.categoryName}</Text>
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
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    height: 85,
    backgroundColor: '#567B89',
    borderRadius: 8,
    // backgroundColor: 'pink',
    marginLeft: 20,
    marginTop: 15,
    padding: 10,
  },

  categoryText: {
    color: '#ECF2FF',
    fontSize: 18,
    fontWeight: '600',
  },
});

// import React from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// const CategoryPage = () => {
//   const categories = [
//     'Men',
//     'Women',
//     'Children',
//     'Traditional',
//     'Ethinic',
//     'Marriage',
//     'Birthday',
//     'Casuals',
//   ];
//   const handleCategoryPress = category => {
//     console.log(`Selected category: ${category}`);
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => console.log('Back button pressed')}>
//           <Icon
//             name="md-chevron-back"
//             size={30}
//             style={{marginLeft: 20, color: '#3E54AC', top: 10, fontSize: 25}}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Categories</Text>
//       </View>
//       <View style={styles.searchInputContainer}>
//         <Icon name="search-sharp" size={30} style={{marginLeft: 20}} />
//         <TextInput
//           placeholder="Search"
//           style={{fontSize: 20, paddingLeft: 10}}
//         />
//       </View>
//       <ScrollView>
//         {categories.map(category => (
//           <TouchableOpacity
//             key={category}
//             onPress={() => handleCategoryPress(category)}
//             style={styles.card}>
//             <ImageBackground
//               source={require('../src/assets/cloths.jpg')}
//               style={styles.cardImage}
//               imageStyle={styles.cardImageStyle}>
//               <Text style={styles.cardTitle}>{category}</Text>
//             </ImageBackground>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ECF2FF',
//   },
//   searchInputContainer: {
//     height: 50,
//     width: 350,
//     backgroundColor: 'white',
//     marginTop: 15,
//     marginLeft: 20,
//     borderColor: '#3E54AC',
//     borderWidth: 2,
//     borderRadius: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: '#3E54AC',
//     left: 70,
//     top: -15,
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   card: {
//     width: 360,
//     padding: 1,
//     borderRadius: 5,
//     marginVertical: 20,
//     top: 20,
//     left: 15,
//     // marginHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     // shadowOpacity: 0.29,
//     // shadowRadius: 4.65,
//     // elevation: 7,
//   },
//   cardImage: {
//     flex: 1,
//     // resizeMode: 'cover',
//     justifyContent: 'center',
//     borderRadius: 5,
//     overflow: 'hidden',
//     height: 100,
//   },
//   cardImageStyle: {
//     opacity: 0.4, // adjust the opacity of the image here
//   },
//   cardTitle: {
//     fontSize: 24,
//     fontWeight: '900',
//     textAlign: 'center',
//     color: '#3E54AC',
//   },
// });
// export default CategoryPage;
