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
        <View style={OwnerImagestyles.TitletextContainer}>
          <MaterialIcons
            style={OwnerImagestyles.Icon}
            onPress={onHandleOwnerItems}
            name="arrow-back-ios"
          />
          <Text style={OwnerImagestyles.TitleText}>Add Items</Text>
        </View>
        <View style={OwnerImagestyles.form}>
          <View style={OwnerImagestyles.ImageBox}>
            <Text style={OwnerImagestyles.addImagesText}>Add Images *</Text>
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
              // <Mainbutton onPress={undefined} text="remove" />
              <View style={OwnerImagestyles.Addimage}>
                <MaterialIcons
                  style={OwnerImagestyles.AddIcon}
                  name="add-to-photos"
                />
                <Text onPress={pickImages} style={OwnerImagestyles.imagesText}>
                  Add Image
                </Text>
              </View>
            )}
            <View style={OwnerImagestyles.Sizecontainer}>
              <Text style={OwnerImagestyles.Sizetext}> Size *</Text>
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
            <Text style={OwnerImagestyles.Pricetext}> Price *</Text>
            <TextInput
              style={OwnerImagestyles.Price}
              placeholderTextColor={'#3E54AC'}
              keyboardType="numeric"
              // onChangeText={(value: any) => setPrice(value)}
              onChangeText={handlePriceChange}
              onBlur={() => handleBlur('price')}
            />
            {formik.touched.price && formik.errors.price && (
              <Text style={Styles.errorText}>{formik.errors.price}</Text>
            )}
            <Text style={OwnerImagestyles.Quantitytext}> Quantity *</Text>
            <TextInput
              keyboardType="numeric"
              style={OwnerImagestyles.Price}
              placeholderTextColor={'#3E54AC'}
              // onChangeText={(value: any) => setQuantity(value)}
              onChangeText={handleQuantityChange}
              onBlur={() => handleBlur('quantity')}
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <Text style={Styles.errorText}>{formik.errors.quantity}</Text>
            )}
            {/* <Mainbutton onPress={postData} text="Add Items" /> */}
            <View style={Styles.mainButton}>
              <TouchableOpacity
                disabled={!formik.isValid}
                onPress={formik.handleSubmit}
                style={[
                  Styles.mainTouchable,
                  {
                    backgroundColor: formik.isValid
                      ? Colors.iconscolor
                      : '#A5C9CA',
                  },
                ]}>
                <Text style={Styles.touchableText}>Add Items</Text>
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
