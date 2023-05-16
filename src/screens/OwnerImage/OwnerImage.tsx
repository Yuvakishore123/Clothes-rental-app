/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OwnerImagestyles from './OwnerImagestyles';
import Sizeselection from '../../components/atoms/Sizeselect';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Useownerimage from './Useownerimage';
import Styles from '../LoginScreen/LoginStyle';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
import Colors from '../../constants/Colors';
import Ownerstyles from '../Additems/Additemsstyle';
import BackButton from '../../components/atoms/BackButton/BackButton';
import HeadingText from '../../components/atoms/HeadingText/HeadingTest';
export default function Owneraddimages() {
  const {
    onHandleOwnerItems,
    // Onhandlepress,
    handleSizeTypeChange,
    setSelectedsize,
    handlePriceChange,
    handleQuantityChange,
    handleBlur,
    handleremove,
    selectedImage,
    imageUrls,
    pickImages,
    closeModal,
    showModal,
    formik,
  } = Useownerimage();
  // console.log('johnresly', imageUrls);
  return (
    <ScrollView>
      <View style={OwnerImagestyles.Scroll}>
        <BackButton />
        <HeadingText message="Add products" />
        <View style={OwnerImagestyles.form}>
          <View style={OwnerImagestyles.ImageBox}>
            {selectedImage ? (
              <>
                <ScrollView horizontal style={OwnerImagestyles.imagehorizontal}>
                  {imageUrls.map((image, index) => (
                    <Image
                      style={OwnerImagestyles.image}
                      source={{uri: image}}
                      key={index}
                    />
                  ))}
                </ScrollView>
                <View style={OwnerImagestyles.removeContainer}>
                  <TouchableOpacity
                    onPress={handleremove}
                    style={OwnerImagestyles.touchableContainer}>
                    <Text style={OwnerImagestyles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={OwnerImagestyles.Addimage}>
                <Text onPress={pickImages} style={OwnerImagestyles.imagesText}>
                  Add Image
                </Text>
              </View>
            )}
            <View style={OwnerImagestyles.Sizecontainer}>
              <Sizeselection
                onSelectSize={setSelectedsize}
                onChange={handleSizeTypeChange}
                onBlur={() => formik.setFieldTouched('size')}
              />
            </View>
            <View style={{marginTop: 20}}>
              {formik.touched.size && formik.errors.size && (
                <Text style={Styles.errorText}>{formik.errors.size}</Text>
              )}
            </View>
            <TextInput
              style={[OwnerImagestyles.Price, {paddingLeft: 25}]}
              placeholder="Select price"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              keyboardType="numeric"
              onChangeText={handlePriceChange}
              onBlur={() => handleBlur('price')}
            />
            {formik.touched.price && formik.errors.price && (
              <Text style={Styles.errorText}>{formik.errors.price}</Text>
            )}
            <TextInput
              keyboardType="numeric"
              placeholder="Select quantity"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              style={[OwnerImagestyles.quantity, {paddingLeft: 25}]}
              onChangeText={handleQuantityChange}
              onBlur={() => handleBlur('quantity')}
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <Text style={Styles.errorText}>{formik.errors.quantity}</Text>
            )}
            <View style={Styles.mainButton}>
              <TouchableOpacity
                disabled={!formik.isValid}
                onPress={formik.handleSubmit}
                style={[
                  Styles.mainTouchable,
                  {
                    backgroundColor: formik.isValid ? '#9747FF' : '#A5C9CA',
                  },
                ]}>
                <Text style={Styles.touchableText}>Add product</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <CustomModal
        showModal={showModal}
        onClose={closeModal}
        message="Product added successfully!"
      />
    </ScrollView>
  );
}
