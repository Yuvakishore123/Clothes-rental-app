import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Ownerstack from './Ownerbottomtab/Ownerstack';
import {useSelector} from 'react-redux';
import MyStack from './Userbottomtab/UserStack';

const OwnerNavigation = () => {
  const role = useSelector(state => state.Rolereducer.role);
  console.log(role);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {role === 2 ? <MyStack /> : <Ownerstack />}
    </NavigationContainer>
  );
};

export default OwnerNavigation;

const styles = StyleSheet.create({});
