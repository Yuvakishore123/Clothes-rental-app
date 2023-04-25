import React from 'react';
import OwnerEditProfile from '../../screens/Ownereditprofile/Ownereditprofile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Owneraddresspage from '../../screens/Owneraddaddress/Owneraddresspage';
import Owneraddaddress from '../../screens/Owneraddaddress/Owneraddaddress';
import OwnerProfile from '../../screens/Ownerprofile/OwnerProfile';
import MyRentals from '../../screens/My Rentals/MyRentals';
import OwnerHome from '../../screens/OwnerHomepage/OwnerHome';
import Additems from '../../screens/Additems/Additems';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import OwnerImage from '../../screens/OwnerImage/OwnerImage';
import Imagepicker from '../../components/atoms/Imagepicker';
import OproductDetails from '../../screens/OwnerProductdetailsPage/OproductDetails';
import Owneredititems from '../../screens/Owneredititems/Owneredititems';
import Colors from '../../constants/Colors';
// import Init from './src/redux/actions/actions';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const OwnerProfilestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      <Stack.Screen name="OwnerEditProfile" component={OwnerEditProfile} />
      <Stack.Screen name="Owneredititems" component={Owneredititems} />
      <Stack.Screen name="Owneraddresspage" component={Owneraddresspage} />
      <Stack.Screen name="Owneraddaddress" component={Owneraddaddress} />
      <Stack.Screen name="MyRentals" component={MyRentals} />
      <Stack.Screen name="OproductDetails" component={OproductDetails} />
    </Stack.Navigator>
  );
};
// const OwnerHomestack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="OwnerHome">
//       <Stack.Screen name="OwnerHome" component={OwnerHome} />
//       <Stack.Screen name="Oproduct" component={OwnerHome} />
//       <Stack.Screen name="Additems" component={Additems} />
//       <Stack.Screen name="MyRentals" component={MyRentals} />
//       <Stack.Screen name="OproductDetails" component={OproductDetails} />
//     </Stack.Navigator>
//   );
// };


const OwnerHomestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OwnerHome">
      <Stack.Screen name="OwnerHome" component={OwnerHome} />
      <Stack.Screen name="Oproduct" component={OwnerHome} />
      <Stack.Screen name="Additems" component={Additems} />
      <Stack.Screen name="MyRentals" component={MyRentals} />
      <Stack.Screen name="OproductDetails" component={OproductDetails} />
    </Stack.Navigator>
  );
};







const Owneradditemsstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Additems">
      <Stack.Screen name="Additems" component={Additems} />
      <Stack.Screen name="OwnerImage" component={OwnerImage} />
      <Stack.Screen name="Imagepicker" component={Imagepicker} />
    </Stack.Navigator>
  );
};
const Ownerstack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 60,
          elevation: 30,
          borderColor: Colors.iconscolor,
        },
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#3E54AC',
        tabBarLabelStyle: {fontSize: 10, paddingBottom: 5},
      }}>
      <Tab.Screen
        name="Home"
        component={OwnerHomestack}
        options={({route}) => ({
          tabBarStyle: {
            display: getRouteName(route),
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 60,
          },
          tabBarIcon: ({color}) => (
            <MaterialIcon name="house" color={color} size={42} />
          ),
        })}
      />
      <Tab.Screen
        name="Additem"
        component={Owneradditemsstack}
        options={({route}) => ({
          tabBarStyle: {
            display: getRouteName(route),
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 60,
          },
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={42} />
          ),
          // <MaterialCommunityIcons name="plus-box" color={color} size={40} />
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={OwnerProfilestack}
        options={({route}) => ({
          tabBarStyle: {
            display: getRouteName(route),
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 60,
          },
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={42} />
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
    routeName?.includes('Owneraddaddress') ||
    routeName?.includes('Owneredititems') ||
    routeName?.includes('OwnerImage') ||
    routeName?.includes('OproductDetails')
  ) {
    return 'none';
  }
  return 'flex';
};
export default Ownerstack;

// import React from 'react';
// import OwnerEditProfile from '../../screens/Ownereditprofile/Ownereditprofile';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Owneraddresspage from '../../screens/Owneraddaddress/Owneraddresspage';
// import Owneraddaddress from '../../screens/Owneraddaddress/Owneraddaddress';
// import OwnerProfile from '../../screens/Ownerprofile/OwnerProfile';
// import MyRentals from '../../screens/My Rentals/MyRentals';
// import OwnerHome from '../../screens/OwnerHomepage/OwnerHome';
// import Additems from '../../screens/Additems/Additems';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import OwnerImage from '../../screens/OwnerImage/OwnerImage';
// import Imagepicker from '../../components/atoms/Imagepicker';
// import OproductDetails from '../../screens/OwnerProductdetailsPage/OproductDetails';
// import Owneredititems from '../../screens/Owneredititems/Owneredititems';
// import Colors from '../../constants/Colors';
// import Homescreen from '../../screens/Home/Homescreen';
// // import Init from './src/redux/actions/actions';
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const OwnerProfilestack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Profile">
//       <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
//       <Stack.Screen name="OwnerEditProfile" component={OwnerEditProfile} />
//       <Stack.Screen name="Owneredititems" component={Owneredititems} />
//       <Stack.Screen name="Owneraddresspage" component={Owneraddresspage} />
//       <Stack.Screen name="Owneraddaddress" component={Owneraddaddress} />
//       <Stack.Screen name="MyRentals" component={MyRentals} />
//       <Stack.Screen name="OproductDetails" component={OproductDetails} />

//     </Stack.Navigator>
//   );
// };
// const OwnerHomestack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="OwnerHome">
//       <Stack.Screen name="OwnerHome" component={OwnerHome} />
//       <Stack.Screen name="Oproduct" component={OwnerHome} />
//       <Stack.Screen name="OproductDetails" component={OproductDetails} />

//     </Stack.Navigator>
//   );
// };
// const Owneradditemsstack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Additems">
//       <Stack.Screen name="Additems" component={Additems} />
//       <Stack.Screen name="OwnerImage" component={OwnerImage} />
//       <Stack.Screen name="Imagepicker" component={Imagepicker} />
//     </Stack.Navigator>
//   );
// };
// const Ownerstack = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderTopLeftRadius: 25,
//           borderTopRightRadius: 25,
//           height: 60,
//           elevation: 30,
//           borderColor: Colors.iconscolor,
//         },
//         tabBarInactiveTintColor: 'grey',
//         tabBarActiveTintColor: '#3E54AC',
//         tabBarLabelStyle: {fontSize: 10, paddingBottom: 5},
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={OwnerHomestack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <MaterialIcon name="house" color={color} size={42} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Additem"
//         component={Owneradditemsstack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="plus-box" color={color} size={40} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ProfileScreen"
//         component={OwnerProfilestack}
//         options={({route}) => ({
//           tabBarStyle: {
//             display: getRouteName(route),
//             borderTopLeftRadius: 25,
//             borderTopRightRadius: 25,
//             height: 60,
//           },
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={42} />
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
//     routeName?.includes('Owneraddaddress') ||
//     routeName?.includes('Owneredititems')
//   ) {
//     return 'none';
//   }
//   return 'flex';
// };
// export default Ownerstack;
