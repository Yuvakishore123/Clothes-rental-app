// import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {StatusBar, View} from 'react-native';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// import LoginScreen from './src/screens/LoginScreen/LoginScreen';
// import {Provider, useDispatch, useSelector} from 'react-redux';
// import {store} from './src/redux/store';
// import Profile from './src/screens/Profile/Profile';
// import {ActivityIndicator} from 'react-native-paper';
// import Colors from './src/constants/Colors';
// import {Init} from './src/redux/actions/actions';
// import Home from './src/screens/Home/Homescreen';
// import SignupScreen from './src/screens/SignUp/SignupScreen';
// import OwnerHome from './src/screens/OwnerHomepage/OwnerHome';
// import Additems from './src/screens/Additems/Additems';
// import OwnerProfile from './src/screens/Ownerprofile/OwnerProfile';
// import OwnerImage from './src/screens/OwnerImage/OwnerImage';
// import MyRentals from './src/screens/My Rentals/MyRentals';
// import OproductDetailspage from './src/screens/OwnerProductdetailsPage/OproductDetails';
// import OtpScreen from './src/screens/OtpScreen/OtpScreen';
// // import Init from './src/redux/actions/actions';
// import Ownerstack from './src/navigation/Ownerbottomtab/Ownerstack';
// import MyStack from './src/navigation/Userbottomtab/UserStack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import OwnerNavigation from './src/navigation/OwnerNavigation';
// // import { useSelector } from 'react-redux';
// const Stack = createSharedElementStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

// const MyStacknavigation = () => {
//   return (
//     <NavigationContainer screenOptions={{headerShown: false}}>
//       <MyStack />
//     </NavigationContainer>
//   );
// };
// // const OwnerNavigation = () => {
// //   return (
// //     <NavigationContainer>
// //       <StatusBar backgroundColor="black" barStyle="light-content" />
// //       <Ownerstack />
// //     </NavigationContainer>
// //   );
// // };
// const AuthStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="OtpScreen" component={OtpScreen} />
//       <Stack.Screen name="SignupScreen" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// };
// const RootNavigation = () => {
//   const token = useSelector((state: any) => state.Reducers.authToken);
//   console.log(token);
//   const [loading, setLoading] = useState(true);

//   const dispatch = useDispatch();
//   const init = async () => {
//     await dispatch(Init());
//     setLoading(false);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   if (loading === true) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <ActivityIndicator size="large" color={Colors.primary} />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <StatusBar backgroundColor="black" barStyle="light-content" />
//       {token === null ? <AuthStack /> : <OwnerNavigation />}
//     </NavigationContainer>
//   );
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <RootNavigation />
//       {/* <OwnerNavigation /> */}
//     </Provider>
//   );
// };

// export default App;

// import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {StatusBar, View} from 'react-native';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// import LoginScreen from './src/screens/LoginScreen/LoginScreen';
// import {Provider, useDispatch, useSelector} from 'react-redux';
// import {store} from './src/redux/store';
// import Profile from './src/screens/Profile/Profile';
// import {ActivityIndicator} from 'react-native-paper';
// import Colors from './src/constants/Colors';
// import {Init} from './src/redux/actions/actions';
// import Home from './src/screens/Home/Homescreen';
// import SignupScreen from './src/screens/SignUp/SignupScreen';
// import OwnerHome from './src/screens/OwnerHomepage/OwnerHome';
// import Additems from './src/screens/Additems/Additems';
// import OwnerProfile from './src/screens/Ownerprofile/OwnerProfile';
// import OwnerImage from './src/screens/OwnerImage/OwnerImage';
// import MyRentals from './src/screens/My Rentals/MyRentals';
// import OproductDetailspage from './src/screens/OwnerProductdetailsPage/OproductDetails';
// import OtpScreen from './src/screens/OtpScreen/OtpScreen';
// // import Init from './src/redux/actions/actions';
// import Ownerstack from './src/navigation/Ownerbottomtab/Ownerstack';
// import MyStack from './src/navigation/Userbottomtab/UserStack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import OwnerNavigation from './src/navigation/OwnerNavigation';
// // import { useSelector } from 'react-redux';
// const Stack = createSharedElementStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const MyStacknavigation = () => {
//   return (
//     <NavigationContainer screenOptions={{headerShown: false}}>
//       <MyStack />
//     </NavigationContainer>
//   );
// };
// // const OwnerNavigation = () => {
// //   return (
// //     <NavigationContainer>
// //       <StatusBar backgroundColor="black" barStyle="light-content" />
// //       <Ownerstack />
// //     </NavigationContainer>
// //   );
// // };
// const AuthStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Login" component={LoginScreen} />

//       <Stack.Screen name="SignupScreen" component={SignupScreen} />
//       <Stack.Screen name="OtpScreen" component={OtpScreen} />
//     </Stack.Navigator>
//   );
// };
// const RootNavigation = () => {
//   const token = useSelector((state: any) => state.Reducers.authToken);
//   console.log(token);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const init = async () => {
//     await dispatch(Init());
//     setLoading(false);
//   };
//   useEffect(() => {
//     init();
//   }, []);
//   if (loading === true) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <ActivityIndicator size="large" color={Colors.primary} />
//       </View>
//     );
//   }
//   return (
//     <>
//       <StatusBar backgroundColor="black" barStyle="light-content" />
//       {token === null ? <AuthStack /> : <OwnerNavigation />}
//     </>
//   );
// };
// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <RootNavigation />
//       </NavigationContainer>
//     </Provider>
//   );
// };
// export default App;

//------------

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import Profile from './src/screens/Profile/Profile';
import {ActivityIndicator} from 'react-native-paper';
import Colors from './src/constants/Colors';
import {Init} from './src/redux/actions/actions';
import Home from './src/screens/Home/Homescreen';
import SignupScreen from './src/screens/SignUp/SignupScreen';
import OwnerHome from './src/screens/OwnerHomepage/OwnerHome';
import Additems from './src/screens/Additems/Additems';
import OwnerProfile from './src/screens/Ownerprofile/OwnerProfile';
import OwnerImage from './src/screens/OwnerImage/OwnerImage';
import MyRentals from './src/screens/My Rentals/MyRentals';
import OproductDetailspage from './src/screens/OwnerProductdetailsPage/OproductDetails';
import OtpScreen from './src/screens/OtpScreen/OtpScreen';
// import Init from './src/redux/actions/actions';
import Ownerstack from './src/navigation/Ownerbottomtab/Ownerstack';
import MultipleImages from './src/components/atoms/MultipleImages';
import MyStack from './src/navigation/Userbottomtab/UserStack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import OwnerNavigation from './src/navigation/OwnerNavigation';
// import { useSelector } from 'react-redux';
const Stack = createSharedElementStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MyStacknavigation = () => {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
      <MyStack />
    </NavigationContainer>
  );
};
// const OwnerNavigation = () => {
//   return (
//     <NavigationContainer>
//       <StatusBar backgroundColor="black" barStyle="light-content" />
//       <Ownerstack />
//     </NavigationContainer>
//   );
// };
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="SignupScreen" component={SignupScreen} />

      <Stack.Screen name="OtpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};
const RootNavigation = () => {
  const token = useSelector((state: any) => state.Reducers.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  if (loading === true) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {token === null ? <AuthStack /> : <OwnerNavigation />}
    </>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
