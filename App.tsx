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
import Home from './src/screens/Home/Home';
import SignupScreen from './src/screens/SignUp/SignupScreen';
import OwnerHome from './src/screens/OwnerHomepage/OwnerHome';
import Additems from './src/screens/Additems/Additems';
import OwnerProfile from './src/screens/Ownerprofile/OwnerProfile';
import OwnerImage from './src/screens/OwnerImage/OwnerImage';
import MyRentals from './src/screens/My Rentals/MyRentals';
import OproductDetailspage from './src/screens/OwnerProductdetailsPage/OproductDetails';
import OtpScreen from './src/screens/OtpScreen/OtpScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Init from './src/redux/actions/actions';
const Stack = createSharedElementStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MyStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="main" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const MyStacknavigation = () => {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
     <MyStack />
    </NavigationContainer>
  );
};

const OwnerProfileStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="OwnerProfile" component={OwnerProfile} />
      <Tab.Screen name="MyRentals" component={MyRentals} />
    </Tab.Navigator>
  );
};
const OwnerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OwnerHome" component={OwnerHome} />
      <Stack.Screen name="Additems" component={Additems} />
      <Stack.Screen name="OwnerImage" component={OwnerImage} />
      <Stack.Screen name="OwnerProfileStack" component={OwnerProfileStack} />
      <Stack.Screen name="OproductDetails" component={OproductDetailspage} />
    </Stack.Navigator>
  );
};
const OwnerNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <OwnerStack />
    </NavigationContainer>
  );
}
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
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
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {token === null ? <AuthStack /> : <MyStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MyStacknavigation />
    </Provider>
  );
};

export default App;
