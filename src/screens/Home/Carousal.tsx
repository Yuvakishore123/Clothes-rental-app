import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';



// const {width} = Dimensions.get('window');
const width = 360;
const height = width * 0.6; //60%

const images = [
  'https://media.istockphoto.com/id/1409751960/photo/young-businessman-using-digital-tablet-while-working-in-business-office.jpg?b=1&s=170667a&w=0&k=20&c=5Fun69GLD87oPrX_HrMibAMHP1vlIj6VZrqCby9ot2I=',
  'https://images.unsplash.com/photo-1588190464153-0b4082f4f923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1OTUwMTg0OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
  'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-4.0.3&ixid=MnwxM[…]HN1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
];
const change = ({nativeEvent}) => {
  const slide = Math.ceil(
    nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
  );
  if (slide !== this.state.active) {
    this.setState({active: slide});
  }
};
export default class Carousal extends React.Component {
  state = {active: 0};

  change = event => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.scroll}>
          {images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={style.image} />
          ))}
        </ScrollView>
        <View style={style.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k === this.state.active
                  ? style.pagingActiveText
                  : style.pagingText
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 38,
    width,
    height,
    borderRadius: 20,
    alignSelf: 'center',
  },

  scroll: {width, height},
  image: {width, height, resizeMode: 'cover', borderRadius: 10},
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {color: '#888', margin: 3},
  pagingActiveText: {fontSize: width / 30, color: '#fff', margin: 3},
});
