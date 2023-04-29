// import {useNavigation} from '@react-navigation/native';
// import * as Yup from 'yup';
// // import RNFS from 'react-native-fs';
// // import Imagepicker from '../../components/atoms/Imagepicker/Imagepicker';
// import {useDispatch, useSelector} from 'react-redux';
// import axios from 'axios';
// import {addsize} from '../../redux/actions/actions';
// import {SetStateAction, useEffect, useState} from 'react';
// import {Alert, Platform} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import {androidCameraPermission} from '../../constants/Permissions';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useFormik} from 'formik';
// import OwnerHome from '../../screens/OwnerHomepage/OwnerHome';
// // import {ItemsReducer} from '../../redux/reducers/AddItemsReducer';
// const OwnerImage = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const name = useSelector(state => state.ItemsReducer.Name);
//   const description = useSelector(state => state.ItemsReducer.Description);
//   const categoryIds = useSelector(state => state.ItemsReducer.CategoryId);
//   const subcategoryIds = useSelector(
//     state => state.ItemsReducer.subcategoryIds,
//   );
//   console.log(categoryIds);
//   console.log(subcategoryIds);
//   const size = useSelector(state => state.SizeReducer.selected);
//   // const {selectedImage, setSelectedImage} = useImagepicker();
//   const [selectedsize, setSelectedsize] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [url, setUrl] = useState('');
//   const getImageUrl = async () => {
//     const url = await AsyncStorage.getItem('url');
//     setUrl(url);
//     console.log('Retrieved URL:', url);
//   };
//   useEffect(() => {
//     getImageUrl();
//   }, []);
//   const AdditemsvalidationSchema = Yup.object().shape({
//     size: Yup.string().required('Size is required'),
//     price: Yup.number()
//       .required('Price is required')
//       .min(100, 'Price must be greater than 100'),
//     // image: Yup.string().required('image is required'),
//     quantity: Yup.number()
//       .required('Quantity is required')
//       .min(1, 'Quantity must be greater than zero'),
//   });
//   const handleSizeTypeChange = (selectedSize: SetStateAction<string>) => {
//     setSelectedsize(selectedSize);
//     formik.setFieldValue('size', selectedSize);
//   };
//   const handlePriceChange = (value: any) => {
//     setPrice(value);
//     formik.setFieldValue('price', value);
//   };
//   const handleSelectedImage = (image: any) => {
//     setSelectedImage(image);
//     formik.setFieldValue('image', image.url);
//   };
//   const handleQuantityChange = (value: any) => {
//     setQuantity(value);
//     formik.setFieldValue('quantity', value);
//   };
//   const handleBlur = (field: string) => {
//     formik.setFieldTouched(field);
//   };
//   const onHandleOwnerItems = () => {
//     navigation.goBack();
//   };
//   // const Onhandlepress = () => {
//   //   navigation.navigate(Imagepicker);
//   // };
//   // console.log(url); // Wrap subcategoryIds in an array
//   const postData = () => {
//     console.log('url in the post', url);
//     const data = {
//       categoryIds: categoryIds, // Wrap categoryIds in an array
//       name: name,
//       description: description,
//       id: 0,
//       imageURL: url, // Add imageURL field with selectedImage value
//       price: price,
//       quantity: quantity,
//       size: selectedsize,
//       subcategoryIds: subcategoryIds,
//     };
//     axios({
//       method: 'post',
//       url: 'https://f013-106-51-70-135.ngrok-free.app/api/v1/product/add?token=7799a9f1-52a2-461d-9146-c91db88ea8ef',
//       data: data,
//     })
//       .then(response => {
//         console.log('added');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     dispatch(addsize(selectedsize));
//     Alert.alert('Item Successfully Added');
//     Alert.alert(data);
//     navigation.navigate(OwnerHome);
//   };
//   const [selectedImage, setSelectedImage] = useState('');
//   // const navigation = useNavigation();
//   const handleback = () => {
//     navigation.navigate(OwnerImage);
//   };
//   const handleremove = () => {
//     setSelectedImage('');
//   };
//   const onSelectImage = async () => {
//     const permissionStatus = await androidCameraPermission();
//     const onCamera = () => {
//       ImagePicker.openCamera({
//         width: 300,
//         height: 400,
//         cropping: true,
//         mediaType: 'photo',
//         includeBase64: true,
//       }).then(image => {
//         console.log(image);
//         setSelectedImage(image.path);
//         handleback();
//         navigation.navigate(OwnerImage, {image: image.path});
//       });
//     };
//     const onGallery = () => {
//       ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         mediaType: 'photo',
//         cropping: true,
//       }).then(image => {
//         console.log('Seleted Image', image);
//         setSelectedImage(image.path);
//         handleback();
//         setTimeout(() => {
//           imageUpload(image.path);
//         });
//       });
//     };
//     // const imageUpload = (imagePath: string) => {
//     //   var Myheaders = new Headers();
//     //   Myheaders.append('Content-Type', 'multipart/form-data');
//     //   const formdata = new FormData();
//     //   formdata.append('file', {
//     //     uri: imagePath,
//     //     type: 'image/png',
//     //     name: 'image.png',
//     //     fileName: 'image',
//     //     // type: imagePath.type,
//     //     // name: ,
//     //   });
//     //   axios({
//     //     method: 'post',
//     //     url: 'http://07f9-106-51-70-135.ngrok.io/file/upload', // Update the URL to the new API endpoint
//     //     data: formdata,
//     //     // headers: Myheaders,
//     //     timeout: 5000,
//     //   })
//     //     .then(function (response) {
//     //       console.log('Image uploaded:', response.headers);
//     //     })
//     //     .catch(function (error) {
//     //       console.log('Error uploading image:', error.message);
//     //     });
//     // };
//     const imageUpload = async (imagePath: string) => {
//       const formData = new FormData();
//       const url = await AsyncStorage.getItem('url');
//       formData.append('file', {
//         uri: imagePath,
//         type: 'image/png',
//         name: 'image.png',
//       });
//       try {
//         const response = await fetch(
//           'https://122e-106-51-70-135.ngrok-free.app/file/upload',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//             body: formData,
//           },
//         );
//         const result = await response.json();
//         const url = result.url;
//         await AsyncStorage.setItem('url', url);
//         console.log('Image uploaded:', result);
//         getImageUrl();
//         console.log('heloo', url);
//       } catch (error) {
//         console.log('Error uploading image:', error);
//       }
//     };
//     if (permissionStatus || Platform.OS === 'ios') {
//       Alert.alert('Profile Picture', 'Choose option', [
//         {
//           text: 'Camera',
//           onPress: onCamera,
//         },
//         {
//           text: 'Gallery',
//           onPress: onGallery,
//         },
//         {
//           text: 'cancel',
//           onPress: () => {},
//         },
//       ]);
//     }
//   };
//   console.log(name, size);
//   const formik = useFormik({
//     initialValues: {
//       size: '',
//       price: '',
//       image: '',
//       quantity: '',
//     },
//     validationSchema: AdditemsvalidationSchema,
//     onSubmit: postData,
//   });
//   return {
//     onHandleOwnerItems,
//     // Onhandlepress,
//     // data,
//     postData,
//     handleSelectedImage,
//     handleSizeTypeChange,
//     selectedImage,
//     setSelectedImage,
//     selectedsize,
//     setSelectedsize,
//     setPrice,
//     setQuantity,
//     onSelectImage,
//     handleremove,
//     formik,
//     handlePriceChange,
//     handleQuantityChange,
//     handleBlur,
//   };
// };
// export default OwnerImage;
// // import {useNavigation} from '@react-navigation/native';
// // // import RNFS from 'react-native-fs';
// // // import Imagepicker from '../../components/atoms/Imagepicker/Imagepicker';
// // import {useDispatch, useSelector} from 'react-redux';
// // import axios from 'axios';
// // import {addsize} from '../../redux/actions/actions';
// // import {SetStateAction, useEffect, useState} from 'react';
// // import {Alert, Platform} from 'react-native';
// // import ImagePicker from 'react-native-image-crop-picker';
// // import {androidCameraPermission} from '../../constants/Permissions';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import {ItemsReducer} from '../../redux/reducers/AddItemsReducer';
// // const OwnerImage = () => {
// //   const navigation = useNavigation();
// //   const dispatch = useDispatch();
// //   const name = useSelector(state => state.ItemsReducer.Name);
// //   const description = useSelector(state => state.ItemsReducer.Description);
// //   const categoryIds = useSelector(state => state.ItemsReducer.CategoryId);
// //   const subcategoryIds = useSelector(
// //     state => state.ItemsReducer.subcategoryIds,
// //   );
// //   console.log(categoryIds);
// //   console.log(subcategoryIds);
// //   const size = useSelector(state => state.SizeReducer.selected);
// //   // const {selectedImage, setSelectedImage} = useImagepicker();
// //   const [selectedsize, setSelectedsize] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [quantity, setQuantity] = useState('');
// //   const [url, setUrl] = useState('');
// //   const getImageUrl = async () => {
// //     const url = await AsyncStorage.getItem('url');
// //     setUrl(url);
// //     console.log('Retrieved URL:', url);
// //   };
// //   useEffect(() => {
// //     getImageUrl();
// //   }, []);
// //   const handleSizeTypeChange = (selectedSize: SetStateAction<string>) => {
// //     setSelectedsize(selectedSize);
// //   };
// //   const handleSelectedImage = (image: any) => {
// //     setSelectedImage(image);
// //   };
// //   const onHandleOwnerItems = () => {
// //     navigation.goBack();
// //   };
// //   // const Onhandlepress = () => {
// //   //   navigation.navigate(Imagepicker);
// //   // };
// //   // console.log(url); // Wrap subcategoryIds in an array
// //   const postData = () => {
// //     console.log('url in the post', url);
// //     const data = {
// //       categoryIds: categoryIds, // Wrap categoryIds in an array
// //       name: name,
// //       description: description,
// //       id: 0,
// //       imageURL: url, // Add imageURL field with selectedImage value
// //       price: price,
// //       quantity: quantity,
// //       size: selectedsize,
// //       subcategoryIds: subcategoryIds,
// //     };
// //     axios({
// //       method: 'post',
// //       url: 'https://f013-106-51-70-135.ngrok-free.app/api/v1/product/add?token=7799a9f1-52a2-461d-9146-c91db88ea8ef',
// //       data: data,
// //     })
// //       .then(response => {
// //         console.log('added');
// //       })
// //       .catch(error => {
// //         console.log(error);
// //       });
// //     dispatch(addsize(selectedsize));
// //     Alert.alert('Item Successfully Added');
// //     navigation.navigate('OwnerHome');
// //   };
// //   const [selectedImage, setSelectedImage] = useState('');
// //   // const navigation = useNavigation();
// //   const handleback = () => {
// //     navigation.navigate(OwnerImage);
// //   };
// //   const handleremove = () => {
// //     setSelectedImage('');
// //   };
// //   const onSelectImage = async () => {
// //     const permissionStatus = await androidCameraPermission();
// //     const onCamera = () => {
// //       ImagePicker.openCamera({
// //         width: 300,
// //         height: 400,
// //         cropping: true,
// //         mediaType: 'photo',
// //         includeBase64: true,
// //       }).then(image => {
// //         console.log(image);
// //         setSelectedImage(image.path);
// //         handleback();
// //         navigation.navigate(OwnerImage, {image: image.path});
// //       });
// //     };
// //     const onGallery = () => {
// //       ImagePicker.openPicker({
// //         width: 300,
// //         height: 400,
// //         mediaType: 'photo',
// //         cropping: true,
// //       }).then(image => {
// //         console.log('Seleted Image', image);
// //         setSelectedImage(image.path);
// //         handleback();
// //         setTimeout(() => {
// //           imageUpload(image.path);
// //         });
// //       });
// //     };
// //     // const imageUpload = (imagePath: string) => {
// //     //   var Myheaders = new Headers();
// //     //   Myheaders.append('Content-Type', 'multipart/form-data');
// //     //   const formdata = new FormData();
// //     //   formdata.append('file', {
// //     //     uri: imagePath,
// //     //     type: 'image/png',
// //     //     name: 'image.png',
// //     //     fileName: 'image',
// //     //     // type: imagePath.type,
// //     //     // name: ,
// //     //   });
// //     //   axios({
// //     //     method: 'post',
// //     //     url: 'http://07f9-106-51-70-135.ngrok.io/file/upload', // Update the URL to the new API endpoint
// //     //     data: formdata,
// //     //     // headers: Myheaders,
// //     //     timeout: 5000,
// //     //   })
// //     //     .then(function (response) {
// //     //       console.log('Image uploaded:', response.headers);
// //     //     })
// //     //     .catch(function (error) {
// //     //       console.log('Error uploading image:', error.message);
// //     //     });
// //     // };
// //     const imageUpload = async (imagePath: string) => {
// //       const formData = new FormData();
// //       const url = await AsyncStorage.getItem('url');
// //       formData.append('file', {
// //         uri: imagePath,
// //         type: 'image/png',
// //         name: 'image.png',
// //       });
// //       try {
// //         const response = await fetch(
// //           'https://d2cd-106-51-70-135.ngrok-free.app/file/upload',
// //           {
// //             method: 'POST',
// //             headers: {
// //               'Content-Type': 'multipart/form-data',
// //             },
// //             body: formData,
// //           },
// //         );
// //         const result = await response.json();
// //         const url = result.url;
// //         await AsyncStorage.setItem('url', url);
// //         console.log('Image uploaded:', result);
// //         getImageUrl();
// //         console.log('heloo', url);
// //       } catch (error) {
// //         console.log('Error uploading image:', error);
// //       }
// //     };
// //     if (permissionStatus || Platform.OS === 'ios') {
// //       Alert.alert('Profile Picture', 'Choose option', [
// //         {
// //           text: 'Camera',
// //           onPress: onCamera,
// //         },
// //         {
// //           text: 'Gallery',
// //           onPress: onGallery,
// //         },
// //         {
// //           text: 'cancel',
// //           onPress: () => {},
// //         },
// //       ]);
// //     }
// //   };
// //   console.log(name, size);
// //   return {
// //     onHandleOwnerItems,
// //     // Onhandlepress,
// //     // data,
// //     postData,
// //     handleSelectedImage,
// //     handleSizeTypeChange,
// //     selectedImage,
// //     setSelectedImage,
// //     selectedsize,
// //     setSelectedsize,
// //     setPrice,
// //     setQuantity,
// //     onSelectImage,
// //     handleremove,
// //   };
// // };
// // export default OwnerImage;
import {useNavigation} from '@react-navigation/native';
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
  // const Onhandlepress = () => {
  //   navigation.navigate(Imagepicker);
  // };
  // console.log(url); // Wrap subcategoryIds in an array
  const postData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('john bhai', token);
      console.log('url in the post', url);
      const data = {
        brand: 'adiddas',
        categoryIds: categoryIds, // Wrap categoryIds in an array
        color: 'black',
        name: name,
        description: description,
        id: 0,
        imageURL: 'url', // Add imageURL field with selectedImage value
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

  const [selectedImage, setSelectedImage] = useState('');
  // const navigation = useNavigation();
  const handleback = () => {
    navigation.navigate(OwnerImage);
  };
  const handleremove = () => {
    setSelectedImage('');
  };
  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    const onCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
        includeBase64: true,
      }).then(image => {
        console.log(image);
        setSelectedImage(image.path);
        handleback();
        navigation.navigate(OwnerImage, {image: image.path});
      });
    };
    const onGallery = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: 'photo',
        cropping: true,
      }).then(image => {
        console.log('Seleted Image', image);
        setSelectedImage(image.path);
        handleback();
        setTimeout(() => {
          imageUpload(image.path);
        });
      });
    };
    // const imageUpload = (imagePath: string) => {
    //   var Myheaders = new Headers();
    //   Myheaders.append('Content-Type', 'multipart/form-data');
    //   const formdata = new FormData();
    //   formdata.append('file', {
    //     uri: imagePath,
    //     type: 'image/png',
    //     name: 'image.png',
    //     fileName: 'image',
    //     // type: imagePath.type,
    //     // name: ,
    //   });
    //   axios({
    //     method: 'post',
    //     url: 'http://07f9-106-51-70-135.ngrok.io/file/upload', // Update the URL to the new API endpoint
    //     data: formdata,
    //     // headers: Myheaders,
    //     timeout: 5000,
    //   })
    //     .then(function (response) {
    //       console.log('Image uploaded:', response.headers);
    //     })
    //     .catch(function (error) {
    //       console.log('Error uploading image:', error.message);
    //     });
    // };
    const imageUpload = async (imagePath: string) => {
      const formData = new FormData();
      const url = await AsyncStorage.getItem('url');
      formData.append('file', {
        uri: imagePath,
        type: 'image/png',
        name: 'image.png',
      });
      try {
        const response = await fetch(
          'https://122e-106-51-70-135.ngrok-free.app/file/upload',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          },
        );
        const result = await response.json();
        const url = result.url;
        await AsyncStorage.setItem('url', url);
        console.log('Image uploaded:', result);
        getImageUrl();
        console.log('heloo', url);
      } catch (error) {
        console.log('Error uploading image:', error);
      }
    };
    if (permissionStatus || Platform.OS === 'ios') {
      Alert.alert('Profile Picture', 'Choose option', [
        {
          text: 'Camera',
          onPress: onCamera,
        },
        {
          text: 'Gallery',
          onPress: onGallery,
        },
        {
          text: 'cancel',
          onPress: () => {},
        },
      ]);
    }
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
    selectedImage,
    setSelectedImage,
    selectedsize,
    setSelectedsize,
    setPrice,
    setQuantity,
    onSelectImage,
    handleremove,
    formik,
    handlePriceChange,
    handleQuantityChange,
    handleBlur,
  };
};
export default OwnerImage;
