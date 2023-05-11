/* eslint-disable react-native/no-inline-styles */
import ImagePicker from 'react-native-image-crop-picker';
import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import React from 'react';
import {androidCameraPermission} from '../../constants/Permissions';
import axios from 'axios';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import OwnerImage from '../../screens/OwnerImage/Useownerimage';
import {url as baseUrl} from '../../constants/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const imageUpload = async (imagePath: string) => {
      const formdata = new FormData();
      const token = await AsyncStorage.getItem('token');
      formdata.append('file', {
        uri: imagePath,
        type: 'image/png',
        name: 'image.png',
      });
      axios({
        method: 'post',
        url: `${baseUrl}/file/upload`, // Update the URL to the new API endpoint
        data: formdata,
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
