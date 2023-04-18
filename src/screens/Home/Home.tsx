import {View} from 'react-native';
import React from 'react';
import MyHeader from '../../components/molecules/MyHeader';
// import BottomTab from '../../components/molecules/BottomTab';
import HomeLogic from './HomeLogic';
import styles from './Homestyle';
export default function Home({route}: Props) {
  return (
    <View style={{flex: 1}}>
      <MyHeader title={route.name} style={styles.header} />
      <View style={styles.container}>
        <HomeLogic />
      </View>
      <View style={styles.bottomTabWrapper}>
        {/* <BottomTab navigation={navigation} /> */}
      </View>
    </View>
  );
}
