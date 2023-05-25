import {useState} from 'react';
import {FilterProduct, categoriesData} from '../../constants/Apis';
import ApiService from '../../network/network';
import SubcategoryList from '../Subcategory/Subcategory';

const useSearchresults = () => {
  const [minimumPrice, setMinimumPrice] = useState('');
  const [maximumPrice, setMaximumPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  //   const [size, SetSize] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = ['S', 'M', 'L', 'XL']; // Example sizes, replace with your own data

  const [modalVisible, setModalVisible] = useState(false);

  const FilterData = async () => {
    try {
      const response = await ApiService.get(
        `${FilterProduct}?maxPrice=${maximumPrice}&minPrice=${minimumPrice}&size=${selectedSize}&subcategoryId=${3}`,
      );
      // Assuming the API response contains an array of filtered products
      setFilteredProducts(response);
      console.log(response);
    } catch (error) {
      console.error('Error fetching filtered products:', error);
      setFilteredProducts([]);
    }
  };
  const SubcategoryData = async () => {
    try {
      const response = await ApiService.get(categoriesData);
      console.log('Sub Category data', response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilterButtonPress = () => {
    // FilterData(minimumPrice, maximumPrice, selectedSize);
    SubcategoryData();
    setModalVisible(!modalVisible);
  };
  const handleFilterapply = () => {
    FilterData(minimumPrice, maximumPrice, selectedSize);
    setModalVisible(!modalVisible);
  };

  console.log(minimumPrice);
  console.log(maximumPrice);

  return {
    FilterData,
    minimumPrice,
    maximumPrice,
    setMinimumPrice,
    setMaximumPrice,
    filteredProducts,
    sizes,
    modalVisible,
    selectedSize,
    setSelectedSize,
    setModalVisible,
    handleFilterButtonPress,
    SubcategoryData,
    handleFilterapply,
  };
};

export default useSearchresults;
