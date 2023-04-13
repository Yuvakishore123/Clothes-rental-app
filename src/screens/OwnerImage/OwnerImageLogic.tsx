import {Image, InputAccessoryView, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Additems from '../Additems/Additems';
import {useNavigation} from '@react-navigation/native';
import OwnerImagestyles from './OwnerImagestyles';
import Sizeselection from '../../components/atoms/Sizeselect';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Mainbutton from '../../components/atoms/MainButton';
import OwnerHome from '../OwnerHomepage/OwnerHome';
import Imagepicker, {UploadImage} from '../../components/atoms/Imagepicker';
import {OpenPicker} from '../../components/atoms/Openpicker';
import AddImages from '../../components/atoms/AddImages';

export default function OwnerImageLogic() {
  const navigation = useNavigation();
  const onHandleOwnerItems = () => {
    navigation.navigate(Additems);
  };
  const Onhandlepress = () => {
    navigation.navigate(OwnerHome);
  };
  return (
    <ScrollView style={OwnerImagestyles.mainContainer}>
      <View style={OwnerImagestyles.TitletextContainer}>
        <MaterialIcons
          style={OwnerImagestyles.Icon}
          onPress={onHandleOwnerItems}
          name="arrow-back-ios"
        />
        <Text style={OwnerImagestyles.TitleText}>Add Items</Text>
      </View>
      <ScrollView>
        <View style={OwnerImagestyles.ImageContainer}>
          <Image
            style={OwnerImagestyles.image}
            source={require('../../../Assets/AddImage.png')}
          />
        </View>
        <View style={OwnerImagestyles.ImageBox}>
          <Text onPress={OpenPicker} style={OwnerImagestyles.TitleText}>
            Add Images
          </Text>
          <View style={OwnerImagestyles.Addimage}>
            <MaterialIcons
              style={OwnerImagestyles.AddIcon}
              name="add-to-photos"
            />
            <Text style={OwnerImagestyles.imagesText}>Add Image</Text>
          </View>
          <Text style={OwnerImagestyles.TitleText}> Size</Text>
          <Sizeselection />
          <Text style={OwnerImagestyles.Pricetext}> Price</Text>
          <TextInput style={OwnerImagestyles.Price} />
        </View>
        <Mainbutton onPress={Onhandlepress} text="Add Items" />
      </ScrollView>
    </ScrollView>
  );
}
