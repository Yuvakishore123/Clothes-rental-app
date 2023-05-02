import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../../redux/slice/productSlice';
import {useNavigation} from '@react-navigation/native';
import OwnerHome from '../My Rentals/MyRentals';
import Additems from '../Additems/Additems';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../../constants/Apis';
function Useownerhome() {
  const [name, setName] = useState('');
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    const fetchProfileData = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await fetch(`${url}/user/getUser`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const profileData = await response.json();
          setName(profileData.firstName);
        } else {
          // throw new Error('Failed to get Owner name on Home page');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfileData();
  }, [refresh]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRefresh(!refresh);
    });
    return unsubscribe;
  }, [navigation, refresh]);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);
  console.log(JSON.stringify(products));
  const handleAdditems = () => {
    navigation.navigate(Additems);
  };
  const handleMyrentals = () => {
    navigation.navigate('MyRentals');
  };
  return {products, handleAdditems, handleMyrentals, name};
}
export default Useownerhome;

// import {useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {fetchProducts} from '../../redux/slice/productSlice';
// function Useownerhome() {
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   const dispatch = useDispatch();
//   const products = useSelector(state => state.products.data);
//   console.log(JSON.stringify(products));
//   return {products};
// }
// export default Useownerhome;
