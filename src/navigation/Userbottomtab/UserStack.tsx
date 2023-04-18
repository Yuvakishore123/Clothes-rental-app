import React from 'react';
import Profile from '../../screens/Profile/Profile';
import Home from '../../screens/Home/Home';
import OwnerEditProfile from '../../screens/Ownereditprofile/Ownereditprofile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Owneraddresspage from '../../screens/Owneraddaddress/Owneraddresspage';
import Owneraddaddress from '../../screens/Owneraddaddress/Owneraddaddress';
import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Profilestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OwnerEditProfile" component={OwnerEditProfile} />
      <Stack.Screen name="Owneraddresspage" component={Owneraddresspage} />
      <Stack.Screen name="Owneraddaddress" component={Owneraddaddress} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 60,
            elevation: 40,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profilestack}
        options={({route}) => ({
          tabBarStyle: {
            display: getRouteName(route),
            backgroundColor: '#fff',
            height: 60,
            borderTopLeftRadius: 25,
            elevation: 40,
            borderTopRightRadius: 25,
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
const getRouteName = (route: Partial<Route<string>>) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (
    routeName?.includes('OwnerEditProfile') ||
    routeName?.includes('Owneraddresspage') ||
    routeName?.includes('Owneraddaddress')
  ) {
    return 'none';
  }
  return 'flex';
};
export default MyStack;
