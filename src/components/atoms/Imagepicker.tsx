// import {launchImageLibrary} from 'react-native-image-picker';
// import {View, Text, Button, Image} from 'react-native';
// import React, {useState} from 'react';

// export default function Imagepicker() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const OpenPicker = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo', // only pick images, not videos or others
//         includeBase64: false, // set to true if you want to include the image data as base64-encoded string
//       },
//       response => {
//         console.log('Response = ', response);

//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.error) {
//           console.log('ImagePicker Error: ', response.error);
//         } else if (response.customButton) {
//           console.log('User tapped custom button: ', response.customButton);
//         } else {
//           // Selected image
//           const source = {uri: response.uri};

//           setSelectedImage(source);
//         }
//       },
//     );
//   };

//   return (
//     <View>
//       {selectedImage ? (
//         <Image source={selectedImage} style={{width: 200, height: 200}} />
//       ) : (
//         <Button onPress={OpenPicker} title="Choose image" />
//       )}
//     </View>
//   );
// }
import ImagePicker from 'react-native-image-crop-picker';
import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import React from 'react';
import {androidCameraPermission} from '../../constants/Permissions';
import axios from 'axios';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import OwnerImage from '../../screens/OwnerImage/Useownerimage';
const Imagepicker = () => {
  const navigation = useNavigation();
  const handleback = () => {
    navigation.navigate(OwnerImage);
  };
  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    const onCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
      }).then(image => {
        console.log(image);
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
        imageUpload(image.path);
      });
    };
    // const imageUpload = imagePath => {
    //   const imageData = new FormData();
    //   imageData.append('file', {
    //     uri: imagePath,
    //     name: 'file',
    //   });
    //   axios({
    //     method: 'post',
    //     url: 'http://e5f3-180-151-211-33.ngrok.io/file/upload',
    //     data: imageData,
    //   })
    //     .then(function (response) {
    //       console.log('image uploaded', response);
    //     })
    //     .catch(function (error) {
    //       console.log('error uploading image', error);
    //     });
    // };
    const imageUpload = (imagePath: string) => {
      const formdata = new FormData();
      formdata.append('file', {
        uri: imagePath,
        type: 'image/png',
        name: 'image.png',
        fileName: 'image',
        // type: imagePath.type,
        // name: ,
      });
      axios({
        method: 'post',
        url: 'http://6965-180-151-211-33.ngrok.io/file/upload', // Update the URL to the new API endpoint
        data: formdata,
      })
        .then(function (response) {
          console.log('Image uploaded:', response);
        })
        .catch(function (error) {
          console.log('Error uploading image:', error);
        });
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
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        width: 400,
      }}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onSelectImage}>
        <Text style={{color: '#ffff'}}>Selct Images</Text>
      </TouchableOpacity>
      <Button onPress={handleback}> cancel </Button>
    </View>
  );
};
export default Imagepicker;
