// import React from 'react';
// import Profile from '../../screens/Profile/Profile';
// import Home from '../../screens/Home/Homescreen';
// import OwnerEditProfile from '../../screens/Ownereditprofile/Ownereditprofile';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Owneraddresspage from '../../screens/Owneraddaddress/Owneraddresspage';
// import Owneraddaddress from '../../screens/Owneraddaddress/Owneraddaddress';
// import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Wishlist from '../../screens/Wishlist/Wishlist';
// import Homescreen from '../../screens/Home/Homescreen';
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const Profilestack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Profile">
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="OwnerEditProfile" component={OwnerEditProfile} />
//       <Stack.Screen name="Owneraddresspage" component={Owneraddresspage} />
//       <Stack.Screen name="Owneraddaddress" component={Owneraddaddress} />
//     </Stack.Navigator>
//   );
// };

// //changes

// const Homestack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Homescreen">
//       <Stack.Screen name="Homescreen" component={Homescreen} />
//       {/* <Stack.Screen name="OwnerEditProfile" component={OwnerEditProfile} />
//       <Stack.Screen name="Owneraddresspage" component={Owneraddresspage} />
//       <Stack.Screen name="Owneraddaddress" component={Owneraddaddress} /> */}
//     </Stack.Navigator>
//   );
// };

// const WishlistStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Profile">
//       <Stack.Screen name="Wishlist" component={Wishlist} />
//     </Stack.Navigator>
//   );
// };

// const MyStack = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false}}>
//       <Tab.Screen
//         name="Homescreen"
//         component={Homestack}
//         options={{
//           tabBarLabel: 'Homescreen',
//           tabBarStyle: {
//             backgroundColor: '#fff',
//             height: 60,
//             elevation: 40,
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//           },
//           headerShown: false,
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="home" color={color} size={40} />
//           ),
//         }}
//       />
//       {/*
//       <Tab.Screen
//         name="ProfileScreen"
//         component={Profilestack}
//         options={({route}) => ({
//           tabBarStyle: {
//             display: getRouteName(route),
//             backgroundColor: '#fff',
//             height: 60,
//             borderTopLeftRadius: 25,
//             elevation: 40,
//             borderTopRightRadius: 25,
//           },
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={40} />
//           ),
//         })}
//       /> */}
//       <Tab.Screen
//         name="ProfileScreen"
//         component={Profilestack}
//         options={({route}) => ({
//           tabBarStyle: {
//             display: getRouteName(route),
//             backgroundColor: '#fff',
//             height: 60,
//             borderTopLeftRadius: 25,
//             elevation: 40,
//             borderTopRightRadius: 25,
//           },
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={40} />
//           ),
//         })}
//       />
//     </Tab.Navigator>
//   );
// };
// const getRouteName = (route: Partial<Route<string>>) => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//   if (
//     routeName?.includes('OwnerEditProfile') ||
//     routeName?.includes('Owneraddresspage') ||
//     routeName?.includes('Owneraddaddress')
//   ) {
//     return 'none';
//   }
//   return 'flex';
// };
// export default MyStack;

import React from 'react';
import Profile from '../../screens/Profile/Profile';
// import Home from '../../screens/Home/Home';
import Homescreen from '../../screens/Home/Homescreen';
// import OwnerEditProfile from "../../screens/Ownereditprofile/Ownereditprofile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryIcon from 'react-native-vector-icons/AntDesign';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wishlist from '../../screens/Wishlist/Wishlist';
import Cart from '../../screens/Cart/Cart';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Category from '../../screens/Category/Category';
import UProductDetails from '../../screens/UProductDetails/UProductDetails';
import Subcategory from '../../screens/Subcategory/Subcategory';
import CategoryProducts from '../../screens/CategoryProducts/CategoryProducts';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Homescreen">
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="UProductDetails" component={UProductDetails} />
    </Stack.Navigator>
  );
};

const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Category">
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Subcategory" component={Subcategory} />
      <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  const data = useSelector(state => state);
  console.log(data);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: 395,
          height: 66,
          backgroundColor: '#ECF2FF',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}>
      <Tab.Screen
        name="UserHomescreen"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryStack}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({color}) => (
            <CategoryIcon name="appstore-o" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={() => ({
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color}) => (
            <View>
              {/* <MaterialCommunityIcons name="account" color={color} size={35} /> */}
              <HeartIcon name="heart-o" color={color} size={30} />
              {/* <View style={styles.Count}>
                <Text style={styles.CountText}>
                  {data.WishlistReducer.length}
                </Text>
              </View> */}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={() => ({
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <View>
              <MaterialCommunityIcons name="cart" color={color} size={30} />
              {/* <View style={styles.Count}>
                <Text style={styles.CountText}>{data.CartReducer.length}</Text>
              </View> */}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default MyStack;

const styles = StyleSheet.create({
  Count: {
    position: 'absolute',
    right: -8,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
