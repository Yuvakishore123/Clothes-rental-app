import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './Signupstyle';
import SignupLogic from './SignupLogin';
export default function SignupScreen({route, navigation}: Props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <SignupLogic />
      </View>
    </View>
  );
}
