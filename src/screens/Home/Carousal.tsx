import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {url} from '../../constants/Apis';

const width = 360;
const height = width * 0.6; //60%

const Carousal = () => {
  const [active, setActive] = useState(0);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    async function fetchSubcategories() {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await fetch(`${url}/category/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setSubcategories(data);
        console.log('john', subcategories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSubcategories();
  }, []);

  const navigation = useNavigation();

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {subcategories.map(subcategory => (
          <View key={subcategory.id}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Subcategory', {
                  categoryId: subcategory.id,
                })
              }>
              <Text style={styles.subname}>{subcategory.categoryName}</Text>
              <Image
                source={{uri: subcategory.imageUrl}}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {subcategories.map((_, index) => (
          <Text
            key={index}
            style={
              index === active ? styles.pagingActiveText : styles.pagingText
            }>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width,
    height,
    borderRadius: 20,
    alignSelf: 'center',
  },
  subname: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: '800',
    zIndex: 1,
    position: 'absolute',
    top: '75%',
    left: '42%',
    fontFamily: 'normal',
  },
  scroll: {width, height},
  image: {width, height, resizeMode: 'cover', borderRadius: 10, opacity: 0.85},
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  pagingText: {color: '#fff', margin: 3},
  pagingActiveText: {fontSize: width / 30, color: '#3E54AC', margin: 3},
});

export default Carousal;
