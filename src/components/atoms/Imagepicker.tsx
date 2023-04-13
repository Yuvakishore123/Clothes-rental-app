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
import {View, Text, ToastAndroid} from 'react-native';
import React from 'react';
import {Avatar, Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import 
export const uploadImage = () => {
  let options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: true,
  };
  launchImageLibrary(options, response => {
    if (response.didCancel) {
      setToastMsg('Canceled image Selection');
    } else if (response.errorCode == 'permission') {
      setToastMsg('permission not satisfied');
    } else if (response.errorMessage == 'others') {
      setToastMsg(response.errorMessage);
    } else {
      setPic(response.assets[0].base64);
    }
  });
};
