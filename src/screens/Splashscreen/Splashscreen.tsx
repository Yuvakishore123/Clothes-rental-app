/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../../constants/Colors';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
const {height} = Dimensions.get('window');

const walkthroughTitleList = [
  {
    id: 1,
    title: 'Looking for a New Style',
    desc: 'Pond of Fashion Dreams ',
    icon: <Lottie source={require('../../../assets/splash1.json')} autoPlay />,
  },
  {
    id: 2,
    title: 'Fashion Never Sleeps',
    desc: 'Love clothes…Love Style',
    icon: <Lottie source={require('../../../assets/splash2.json')} autoPlay />,
  },
  {
    id: 3,
    title: 'Dress like you’re already famous',
    desc: 'Stop Thinking, Just Buy It',
    icon: <Lottie source={require('../../../assets/splash3.json')} autoPlay />,
  },
];

export default function SplashScreen() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login'); // Replace 'Login' with the actual name of your login screen component
  };

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        activeDotColor={Colors.buttonColor}
        activeDotStyle={{
          width: 15,
          height: 15,
          marginTop: 30,
          borderRadius: 7,
          marginRight: 10,
          marginLeft: 10,
        }}
        containerStyle={{backgroundColor: Colors.main}}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 7,
          marginTop: 30,
          backgroundColor: 'transparent',
          borderColor: 'white',
          borderWidth: 1,
          marginRight: 10,
          marginLeft: 10,
        }}
        paginationStyle={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: height / 13,
        }}>
        {walkthroughTitleList.map(item => {
          return (
            <View key={item.id} style={styles.slide}>
              {item.icon}
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              {item.id === walkthroughTitleList.length && (
                <TouchableOpacity
                  style={styles.touchablebtn}
                  onPress={handleLoginPress}>
                  <Text style={styles.touchableText}>Get Started</Text>
                  <Icons name="arrow-forward-ios" size={15} color={'white'} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.main,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginTop: 400,
    fontSize: 25,
    // fontWeight: 'bold',
    marginVertical: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  touchableText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    // fontWeight: '500',
    justifyContent: 'center',
  },
  touchablebtn: {
    height: 59,
    width: 320,
    backgroundColor: '#9747FF',
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});
