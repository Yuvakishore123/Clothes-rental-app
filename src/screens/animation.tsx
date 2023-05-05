import React from 'react';
import {Text, View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

function Animation() {
  return (
    <>
      <View style={{flex: 1}}>
        <AnimatedLottieView
          source={require('../../Assets/emptycart.json')}
          style ={{height: 200}}
          autoPlay
        />
        <Text>hiiii</Text>
      </View>
    </>
  );
}

export default Animation;
