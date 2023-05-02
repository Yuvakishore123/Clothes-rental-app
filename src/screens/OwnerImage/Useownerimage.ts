import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import * as Yup from 'yup';
// import RNFS from 'react-native-fs';
// import Imagepicker from '../../components/atoms/Imagepicker/Imagepicker';
import {useDispatch, useSelector} from 'react-redux';
import {url as baseUrl} from '../../constants/Apis';
import axios from 'axios';
import {addsize} from '../../redux/actions/actions';
import {SetStateAction, useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../constants/Permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFormik} from 'formik';
import OwnerHome from '../OwnerHomepage/OwnerHome';
import {launchImageLibrary} from 'react-native-image-picker';
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
  // const {selectedImage, setSelectedImage} = useImagepicker();
  const [selectedsize, setSelectedsize] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [url, setUrl] = useState('');
  const getImageUrl = async () => {
    const url = await AsyncStorage.getItem('url');
    setUrl(url);
    console.log('Retrieved URL:', url);
  };
  useEffect(() => {
    getImageUrl();
  }, []);
  const AdditemsvalidationSchema = Yup.object().shape({
    size: Yup.string().required('Size is required'),
    price: Yup.number()
      .required('Price is required')
      .min(100, 'Price must be greater than 100'),
    // image: Yup.string().required('image is required'),
    quantity: Yup.number()
      .required('Quantity is required')
      .min(1, 'Quantity must be greater than zero'),
  });
  const handleSizeTypeChange = (selectedSize: SetStateAction<string>) => {
    setSelectedsize(selectedSize);
    formik.setFieldValue('size', selectedSize);
  };
  const handlePriceChange = (value: any) => {
    setPrice(value);
    formik.setFieldValue('price', value);
  };
  const handleSelectedImage = (image: any) => {
    setSelectedImage(image);
    formik.setFieldValue('image', image.url);
  };
  const handleQuantityChange = (value: any) => {
    setQuantity(value);
    formik.setFieldValue('quantity', value);
  };
  const handleBlur = (field: string) => {
    formik.setFieldTouched(field);
  };
  const onHandleOwnerItems = () => {
    navigation.goBack();
  };
  const [urls, setUrls] = useState();
  // const Onhandlepress = () => {
  //   navigation.navigate(Imagepicker);
  // };
  // console.log(url); // Wrap subcategoryIds in an array
  const postData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('john bhai', token);
      console.log('url in the post', imageUrls);
      const posturls = imageUrls;
      console.log('posturls', posturls);
      const data = {
        brand: 'adiddas',
        categoryIds: categoryIds,
        color: 'black',
        name: name,
        description: description,
        id: 0,
        imageURL: imageUrls, // Use the imageUrls state
        material: 'fibre',
        price: price,
        quantity: quantity,
        size: selectedsize,
        subcategoryIds: subcategoryIds,
      };
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/product/add`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('added', response.data);
      dispatch(addsize(selectedsize));
      Alert.alert('Item Successfully Added');
      navigation.navigate(OwnerHome);
    } catch (error) {
      console.log(error);
      Alert.alert('Failed to add item');
    }
  };

  // const [selectedImage, setSelectedImage] = useState('');
  // // const navigation = useNavigation();
  // const handleback = () => {
  //   navigation.navigate(OwnerImage);
  // };
  // const handleremove = () => {
  //   setSelectedImage('');
  // };
  // const onSelectImage = async () => {
  //   const permissionStatus = await androidCameraPermission();
  //   const onCamera = () => {
  //     ImagePicker.openCamera({
  //       width: 300,
  //       height: 400,
  //       cropping: true,
  //       mediaType: 'photo',
  //       includeBase64: true,
  //     }).then(image => {
  //       console.log(image);
  //       setSelectedImage(image.path);
  //       handleback();
  //       navigation.navigate(OwnerImage, {image: image.path});
  //     });
  //   };
  //   const onGallery = () => {
  //     ImagePicker.openPicker({
  //       width: 300,
  //       height: 400,
  //       mediaType: 'photo',
  //       cropping: true,
  //     }).then(image => {
  //       console.log('Seleted Image', image);
  //       setSelectedImage(image.path);
  //       handleback();
  //       setTimeout(() => {
  //         imageUpload(image.path);
  //       });
  //     });
  //   };
  //   // const imageUpload = (imagePath: string) => {
  //   //   var Myheaders = new Headers();
  //   //   Myheaders.append('Content-Type', 'multipart/form-data');
  //   //   const formdata = new FormData();
  //   //   formdata.append('file', {
  //   //     uri: imagePath,
  //   //     type: 'image/png',
  //   //     name: 'image.png',
  //   //     fileName: 'image',
  //   //     // type: imagePath.type,
  //   //     // name: ,
  //   //   });
  //   //   axios({
  //   //     method: 'post',
  //   //     url: 'http://07f9-106-51-70-135.ngrok.io/file/upload', // Update the URL to the new API endpoint
  //   //     data: formdata,
  //   //     // headers: Myheaders,
  //   //     timeout: 5000,
  //   //   })
  //   //     .then(function (response) {
  //   //       console.log('Image uploaded:', response.headers);
  //   //     })
  //   //     .catch(function (error) {
  //   //       console.log('Error uploading image:', error.message);
  //   //     });
  //   // };
  //   const imageUpload = async (imagePath: string) => {
  //     const formData = new FormData();
  //     const url = await AsyncStorage.getItem('url');
  //     formData.append('file', {
  //       uri: imagePath,
  //       type: 'image/png',
  //       name: 'image.png',
  //     });
  //     try {
  //       const response = await fetch(
  //         'https://122e-106-51-70-135.ngrok-free.app/file/upload',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'multipart/form-data',
  //           },
  //           body: formData,
  //         },
  //       );
  //       const result = await response.json();
  //       const url = result.url;
  //       await AsyncStorage.setItem('url', url);
  //       console.log('Image uploaded:', result);
  //       getImageUrl();
  //       console.log('heloo', url);
  //     } catch (error) {
  //       console.log('Error uploading image:', error);
  //     }
  //   };
  //   if (permissionStatus || Platform.OS === 'ios') {
  //     Alert.alert('Profile Picture', 'Choose option', [
  //       {
  //         text: 'Camera',
  //         onPress: onCamera,
  //       },
  //       {
  //         text: 'Gallery',
  //         onPress: onGallery,
  //       },
  //       {
  //         text: 'cancel',
  //         onPress: () => {},
  //       },
  //     ]);
  //   }
  // };
  const [imageUris, setImageUris] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageUris = urls => {
    setImageUrls(urls);
  };

  // const [removeImage, setRemove] = useState([]);
  // const removeImage = index => {
  //   const newImageUris = [...imageUris];
  //   newImageUris.splice(index, 1);
  //   setImageUris(newImageUris);
  //   const newRemove = [...remove, index];
  //   setRemove(newRemove);
  // };
  const handleRemoveImages = () => {
    setImageUris([]);
  };
  useEffect(() => {
    const getImageUrls = async () => {
      const url = await AsyncStorage.getItem('url');
      if (url) {
        const imageUrls = Array.from({length: 10}, (_, index) => {
          return `${url}/file${index + 1}`;
        });
        imageUrls(imageUris);
      }
    };
    getImageUrls();
  }, [imageUris]);
  const pickImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 10,
      },
      async response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const images = response.assets.map(imagePath => ({
            uri: imagePath.uri,
            type: 'image/png',
            name: 'image.png',
          }));
          const formData = new FormData();
          images.forEach((file, index) => {
            formData.append('file', {
              uri: file.uri,
              type: 'image/png',
              name: 'image.png',
            });
          });
          try {
            const token = await AsyncStorage.getItem('token');
            console.log(token);
            const result = await fetch(`${baseUrl}/file/upload`, {
              method: 'POST',
              body: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
            });
            if (result.ok) {
              const res = await result.json();
              console.log(res);
              setImageUrls(res.urls);
              console.log(imageUrls); // Update this line
            } else {
              const res = await result.json();
              console.log('Upload failed');
              console.log(res);
              console.log(token);
            }
          } catch (error) {
            console.error(error);
          }
        }
      },
    );
  };

  console.log(name, size);
  const formik = useFormik({
    initialValues: {
      size: '',
      price: '',
      image: '',
      quantity: '',
    },
    validationSchema: AdditemsvalidationSchema,
    onSubmit: postData,
  });
  return {
    onHandleOwnerItems,
    // Onhandlepress,
    // data,
    postData,
    handleSelectedImage,
    handleSizeTypeChange,
    // selectedImage,
    // setSelectedImage,
    selectedsize,
    setSelectedsize,
    setPrice,
    setQuantity,
    // onSelectImage,
    // handleremove,
    formik,
    handlePriceChange,
    handleQuantityChange,
    handleBlur,
    handleRemoveImages,
    pickImages,
    imageUris,
  };
};
export default OwnerImage;
