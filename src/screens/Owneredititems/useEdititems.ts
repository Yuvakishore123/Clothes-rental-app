import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const useEditItems = () => {
  const [itemsData, setItemsData] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigation = useNavigation();
  //   const [selectedItem, setSelectedItem] = useState(null);
  const handleprice = () => {
    console.log(price);
  };
  const handlePriceChange = newPrice => {
    setPrice(newPrice);
  };
  const handlequantityChange = newQuantity => {
    setQuantity(newQuantity);
  };
  const handleBack = () => {
    navigation.navigate('Owneredititems');
  };
  const handleClick = () => {
    navigation.navigate('EditItemsPage');
    handleEditItems();
  };
  const handleEditItems = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const config = {
        headers: {Authorization: `Bearer ${token}`},
      };
      const response = await fetch(
        'https://60fd-106-51-70-135.ngrok-free.app/api/v1/product/listByProductId/1',
        config,
      );
      const Productsdata = await response.json();
      setName(Productsdata.name);
      const price = Productsdata.price;
      setPrice(parseInt(price, 10)); // convert price to integer
      setDescription(Productsdata.description);
      // setCategoriesData(Productsdata.subcategoryIds);
      setQuantity(parseInt(Productsdata.quantity));
      console.log(Productsdata);
      setItemsData(Productsdata);
      console.log('Name in product:', name);
      console.log('price:', price);
      console.log('description:', description);
      console.log('quantity:', quantity);
      console.log('description:');
    } catch (error) {
      //   console.error(error);
    }
  };
  useEffect(() => {
    handleEditItems();
  }, []);

  return {
    itemsData,
    handleEditItems,
    name,
    price,
    setName,
    setDescription,
    setPrice,
    setQuantity,
    quantity,
    description,
    handleBack,
    handleprice,
    handlePriceChange,
    handleClick,
    handlequantityChange,
  };
};

export default useEditItems;
