import {Image, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OwnerImagestyles from './OwnerImagestyles';
import Sizeselection from '../../components/atoms/Sizeselect';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Mainbutton from '../../components/atoms/MainButton';
import Useownerimage from './Useownerimage';

export default function Owneraddimages() {
  const {
    postData,
    onHandleOwnerItems,
    Onhandlepress,
    handleSizeTypeChange,
    setSelectedsize,
    setPrice,
    setQuantity,
  } = Useownerimage();
  return (
    <ScrollView style={OwnerImagestyles.Scroll}>
      <View>
        <View style={OwnerImagestyles.TitletextContainer}>
          <MaterialIcons
            style={OwnerImagestyles.Icon}
            onPress={onHandleOwnerItems}
            name="arrow-back-ios"
          />
          <Text style={OwnerImagestyles.TitleText}>Add Items</Text>
        </View>
        <View style={OwnerImagestyles.ImageContainer}>
          <Image
            style={OwnerImagestyles.image}
            source={require('../../../Assets/AddImage.png')}
          />
        </View>
        <View style={OwnerImagestyles.ImageBox}>
          <Text style={OwnerImagestyles.addImagesText}>Add Images</Text>
          <Text style={OwnerImagestyles.addImagesText}>
            {/* {CircularJSON.stringify(data)} */}
          </Text>
          <View style={OwnerImagestyles.Addimage}>
            <MaterialIcons
              style={OwnerImagestyles.AddIcon}
              name="add-to-photos"
            />
            <Text onPress={Onhandlepress} style={OwnerImagestyles.imagesText}>
              Add Image
            </Text>
          </View>
          <View style={OwnerImagestyles.Sizecontainer}>
            <Text style={OwnerImagestyles.Sizetext}> Size</Text>
            <Sizeselection
              onSelectSize={setSelectedsize}
              onChange={handleSizeTypeChange}
            />
          </View>
          <Text style={OwnerImagestyles.Pricetext}> Price</Text>
          <TextInput
            style={OwnerImagestyles.Price}
            keyboardType="numeric"
            onChangeText={(value: any) => setPrice(value)}
          />
          <Text style={OwnerImagestyles.Pricetext}> Quantity</Text>
          <TextInput
            keyboardType="numeric"
            style={OwnerImagestyles.Price}
            onChangeText={(value: any) => setQuantity(value)}
          />
          <Mainbutton onPress={postData} text="Add Items" />
        </View>
      </View>
    </ScrollView>
  );
}
