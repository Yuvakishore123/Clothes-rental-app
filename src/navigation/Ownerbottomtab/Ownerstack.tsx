/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
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
import {
  Route,
  getFocusedRouteNameFromRoute,
  useIsFocused,
} from '@react-navigation/native';
import OwnerImage from '../../screens/OwnerImage/OwnerImage';
import Imagepicker from '../../components/atoms/Imagepicker';
import OproductDetails from '../../screens/OwnerProductdetailsPage/OproductDetails';
import Owneredititems from '../../screens/Owneredititems/Owneredititems';
import Colors from '../../constants/Colors';
import EditAddress from '../../screens/EditAddress/EditAddress';
import {View} from 'react-native';
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
      <Stack.Screen name="EditAddress" component={EditAddress} />
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
      {/* <Stack.Screen name="Oproduct" component={OwnerHome} /> */}
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
      <Stack.Screen name="OwnerHome" component={OwnerHome} />
    </Stack.Navigator>
  );
};
const Ownerstack = () => {
  const isFocused = useIsFocused();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.main,
          // borderTopLeftRadius: 25,
          // borderTopRightRadius: 25,
          height: '7%',
          elevation: 30,
          borderColor: Colors.iconscolor,
        },
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveTintColor: Colors.black,
        tabBarLabelStyle: {fontSize: 10, paddingBottom: 5},
      }}>
      <Tab.Screen
        name="Home"
        component={OwnerHomestack}
        options={({route}) => ({
          tabBarStyle: {
            display: getRouteName(route),
            backgroundColor: Colors.main,
            height: '7%',
          },
          tabBarIcon: ({focused, color}) => {
            if (!isFocused) return null;

            let iconComponent;

            if (route.name === 'Home') {
              iconComponent = (
                <View
                  style={{
                    backgroundColor: focused ? Colors.buttonColor : 'black',
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialIcon name="home" color={color} size={30} />
                </View>
              );
            } else if (route.name === 'Additem') {
              iconComponent = (
                <MaterialCommunityIcons
                  name="plus-box"
                  color={color}
                  size={42}
                />
              );
            } else if (route.name === 'ProfileScreen') {
              iconComponent = (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={42}
                />
              );
            }

            return iconComponent;
          },
        })}
      />
      <Tab.Screen
        name="Additem"
        component={Owneradditemsstack}
        options={({route}) => ({
          tabBarStyle: {
            display: getRouteName(route),
            backgroundColor: Colors.main,
            // borderTopLeftRadius: 25,
            // borderTopRightRadius: 25,
            height: '7%',
          },
          tabBarIcon: ({focused, color}) => {
            if (!isFocused) return null;

            let iconComponent;

            if (route.name === 'Additem') {
              iconComponent = (
                <View
                  style={{
                    backgroundColor: focused ? Colors.buttonColor : 'black',
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="plus-box"
                    color={color}
                    size={35}
                  />
                </View>
              );
            } else if (route.name === 'Home') {
              iconComponent = (
                <MaterialIcon name="home" color={color} size={30} />
              );
            } else if (route.name === 'ProfileScreen') {
              iconComponent = (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={42}
                />
              );
            }

            return iconComponent;
          },
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={OwnerProfilestack}
        options={({route}) => ({
          tabBarStyle: {
            display: getRouteName(route),
            backgroundColor: Colors.main,
            // borderTopLeftRadius: 25,
            // borderTopRightRadius: 25,
            height: '7%',
          },
          tabBarIcon: ({focused, color}) => {
            if (!isFocused) return null;

            let iconComponent;

            if (route.name === 'ProfileScreen') {
              iconComponent = (
                <View
                  style={{
                    backgroundColor: focused ? Colors.buttonColor : 'black',
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={35}
                  />
                </View>
              );
            } else if (route.name === 'Home') {
              iconComponent = (
                <MaterialIcon name="home" color={color} size={30} />
              );
            } else if (route.name === 'Additem') {
              iconComponent = (
                <MaterialCommunityIcons
                  name="plus-box"
                  color={color}
                  size={35}
                />
              );
            }

            return iconComponent;
          },
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
