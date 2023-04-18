import {useNavigation} from '@react-navigation/native';
import Additems from '../Additems/Additems';
import Imagepicker from '../../components/atoms/Imagepicker';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {addsize} from '../../redux/actions/actions';
import {SetStateAction, useState} from 'react';
import {Alert} from 'react-native';
// import {ItemsReducer} from '../../redux/reducers/AddItemsReducer';
const OwnerImage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = useSelector(state => state.ItemsReducer.Name);
  const description = useSelector(state => state.ItemsReducer.Description);
  const categoryIds = useSelector(state => state.ItemsReducer.CategoryId);
  const subcategoryIds = useSelector(
    state => state.ItemsReducer.subcategoryIds,
  );
  console.log(categoryIds);
  console.log(subcategoryIds);
  const size = useSelector(state => state.SizeReducer.selected);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedsize, setSelectedsize] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const handleSizeTypeChange = (selectedSize: SetStateAction<string>) => {
    setSelectedsize(selectedSize);
  };
  const handleSelectedImage = (image: any) => {
    setSelectedImage(image);
  };
  const onHandleOwnerItems = () => {
    navigation.goBack();
  };
  const Onhandlepress = () => {
    navigation.navigate(Imagepicker);
  };
  const postData = () => {
    const data = {
      categoryIds: categoryIds, // Wrap categoryIds in an array
      name: name,
      description: description,
      id: 0,
      imageURL: 'URL', // Add imageURL field with selectedImage value
      price: price,
      quantity: quantity,
      size: selectedsize,
      subcategoryIds: subcategoryIds, // Wrap subcategoryIds in an array
    };
    axios({
      method: 'post',
      url: 'https://e5b5-122-172-176-124.ngrok-free.app/api/v1/product/add',
      data: data,
    })
      .then(response => {
        console.log('added');
      })
      .catch(error => {
        console.log(error);
      });
    dispatch(addsize(selectedsize));
    Alert.alert('Item Successfully Added');
    navigation.navigate('OwnerHome');
  };

  console.log(name, size);
  return {
    onHandleOwnerItems,
    Onhandlepress,
    // data,
    postData,
    handleSelectedImage,
    handleSizeTypeChange,
    selectedImage,
    setSelectedImage,
    selectedsize,
    setSelectedsize,
    setPrice,
    setQuantity,
  };
};
export default OwnerImage;
