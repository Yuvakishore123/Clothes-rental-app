import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../../redux/slice/productSlice';
import {useNavigation} from '@react-navigation/native';
import Additems from '../Additems/Additems';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../../constants/Apis';
function Useownerhome() {
  const [name, setName] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [rentedItems, setRentedItems] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const onRefresh = async () => {
    setRefreshing(true);
    dispatch(fetchProducts());
    setRefreshing(false);
  };
  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await fetch(`${url}/order/dashboard`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const dashboardData = await response.json();
          setTotalEarnings(dashboardData.totalEarnings);
          setRentedItems(dashboardData.totalNumberOfItems);
        } else {
          throw new Error('Failed to fetch Dashboard Data');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboardData();
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
        setIsLoading(false);
        if (response.ok) {
          const profileData = await response.json();
          setName(profileData.firstName);
        } else {
          // throw new Error('Failed to get Owner name on Home page');
        }
      } catch (error) {
        console.error(error);
        setIsLoading(true);
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
  const products = useSelector(state => state.products.data);
  // console.log(JSON.stringify(products));
  const handleAdditems = () => {
    navigation.navigate(Additems);
  };
  const handleMyrentals = () => {
    navigation.navigate('MyRentals');
  };
  return {
    products,
    handleAdditems,
    handleMyrentals,
    name,
    isLoading,
    totalEarnings,
    rentedItems,
    refreshing,
    onRefresh,
  };
}
export default Useownerhome;
