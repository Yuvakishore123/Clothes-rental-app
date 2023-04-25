import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../../redux/slice/productSlice';
import {useNavigation} from '@react-navigation/native';
import OwnerHome from '../My Rentals/MyRentals';
import Additems from '../Additems/Additems';
function Useownerhome() {
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);
  console.log(JSON.stringify(products));
  const handleAdditems = () => {
    navigation.navigate(Additems);
  };
  const handleMyrentals = () => {
    navigation.navigate('MyRentals');
  };
  return {products, handleAdditems, handleMyrentals};
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
