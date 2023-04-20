import {SetStateAction, useEffect, useState} from 'react';
import axios from 'axios';
import {EditItemsUrl, OwnerCategoryUrl, url} from '../../constants/Apis';
import {addGenderData, addsize} from '../../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
const Useowneredititems = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [gender, setGender] = useState('');
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState('');
  const [outfitType, setOutfitType] = useState('');
  const [itemType, setItemType] = useState('');
  const size = useSelector(state => state.SizeReducer.selected);
  const [selectedsize, setSelectedsize] = useState('');
  const [editProductId, setEditProductId] = useState(null);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const handleGenderChange = (selectedGender: React.SetStateAction<string>) => {
    setGender(selectedGender);
    dispatch(addGenderData(selectedGender));
    // console.log(selectedGender);
  };
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  useEffect(() => {
    axios
      .get(EditItemsUrl)
      .then(response => {
        const mappedData = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
        }));
        setData(mappedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [categoriesData, setCategoriesData] = useState([]);
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [subEventCategoriesData, setSubEventCategoriesData] = useState([]);
  const [subOutfitCategoriesData, setSubOutfitCategoriesData] = useState([]);
  const genderData = useSelector(state => state.GenderReducer.genderData);
  console.log(genderData);

  // 1st api endpoint code starts

  useEffect(() => {
    // console.log(gender);
    const fetchSubCategoryData = async () => {
      try {
        // setIsLoading(true);
        const response = await axios.get(
          `${url}/api/v1/subcategory/listbyid/${genderData}`,
        );
        // console.log(response);
        const subCategoriesArray = response.data.map(
          (category: {id: any; subcategoryName: any}) => ({
            value: category.id,
            label: category.subcategoryName,
          }),
        );
        setSubCategoriesData(subCategoriesArray);
        console.log(subCategoriesArray);
      } catch (error) {
        console.log(error);
        // setIsLoading(true);
      } finally {
        // setIsLoading(false); // Set isLoading to false after the API call completes
      }
    };
    fetchSubCategoryData();
  }, [genderData]);

  useEffect(() => {
    // console.log(gender);
    const fetchEventCategoryData = async () => {
      try {
        // setIsLoading(true);
        const response = await axios.get(
          `${url}/api/v1/subcategory/listbyid/${1}`,
        );
        // console.log(response);
        const subEventCategoriesArray = response.data.map(
          (category: {id: any; subcategoryName: any}) => ({
            value: category.id,
            label: category.subcategoryName,
          }),
        );
        setSubEventCategoriesData(subEventCategoriesArray);
        console.log(subEventCategoriesArray);
      } catch (error) {
        console.log(error);
        // setIsLoading(true);
      } finally {
        // setIsLoading(false); // Set isLoading to false after the API call completes
      }
    };
    fetchEventCategoryData();
  }, []);

  useEffect(() => {
    // console.log(gender);
    const subOutfitCategoriesData = async () => {
      try {
        // setIsLoading(true);
        const response = await axios.get(
          `${url}/api/v1/subcategory/listbyid/${2}`,
        );
        // console.log(response);
        const subOutfitCategoriesArray = response.data.map(
          (category: {id: any; subcategoryName: any}) => ({
            value: category.id,
            label: category.subcategoryName,
          }),
        );
        setSubOutfitCategoriesData(subOutfitCategoriesArray);
        console.log(subOutfitCategoriesArray);
      } catch (error) {
        console.log(error);
        // setIsLoading(true);
      } finally {
        // setIsLoading(false); // Set isLoading to false after the API call completes
      }
    };
    subOutfitCategoriesData();
  }, []);
  // 2nd api call here

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        // setIsLoading(true);
        const response = await axios.get(OwnerCategoryUrl);
        const categoriesArray = response.data.map(
          (category: {id: any; categoryName: any}) => ({
            ...category,
            value: category.id,
            label: category.categoryName,
          }),
        );
        setCategoriesData(categoriesArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryData();
  }, []);

  // console.log("helo" + gender);

  const handleEventTypeChange = (
    selectedEventType: React.SetStateAction<string>,
  ) => {
    setEventType(selectedEventType);
  };

  const handleOutfitChange = (selectedOutfit: React.SetStateAction<string>) => {
    setOutfitType(selectedOutfit);
  };

  const handleItemTypeChange = (
    selectedItemType: React.SetStateAction<string>,
  ) => {
    setItemType(selectedItemType);
  };
  const handleSizeTypeChange = (selectedSize: SetStateAction<string>) => {
    setSelectedsize(selectedSize);
  };
  const handleedit = () => {
    const data = {
      categoryIds: [gender], // Wrap categoryIds in an array
      name: name,
      description: description,
      id: 0,
      imageURL: 'URL', // Add imageURL field with selectedImage value
      price: price,
      quantity: quantity,
      size: selectedsize,
      subcategoryIds: [itemType, outfitType, eventType], // Wrap subcategoryIds in an array
    };
    axios({
      method: 'PUT',
      url: `https://dff4-106-51-70-135.ngrok-free.app/api/v1/product/update/${editProductId}?token=7799a9f1-52a2-461d-9146-c91db88ea8ef`,
      data: data,
    })
      .then(response => {
        console.log('added');
      })
      .catch(error => {
        console.log(error);
      });
    dispatch(addsize(selectedsize));
    Alert.alert('Item Successfully Edited');
    navigation.navigate('OwnerProfile');
  };

  return {
    data,
    setGender,
    name,
    handleedit,
    description,
    setEventType,
    setOutfitType,
    setItemType,
    handleGenderChange,
    handleEventTypeChange,
    handleOutfitChange,
    handleItemTypeChange,
    setName,
    setDescription,
    setCategoriesData,
    categoriesData,
    subCategoriesData,
    subEventCategoriesData,
    subOutfitCategoriesData,
    handleSizeTypeChange,
    setSelectedsize,
    setPrice,
    setQuantity,
    handleSelectItem,
    setEditProductId,
    selectedItem,
  };
};

export default Useowneredititems;
