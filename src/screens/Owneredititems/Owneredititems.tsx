import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import Useowneredititems from './Useowneredititems';
import GenderDropdown from '../../components/atoms/GenderDropdown';
import Ownerstyles from '../Additems/Additemsstyle';
import TypeDropdown from '../../components/atoms/TypeDropdown';
import EventsDropdown from '../../components/atoms/EventsDropdown';
import OutfitDropdown from '../../components/atoms/OutfitDropdown';
import Sizeselection from '../../components/atoms/Sizeselect';
import OwnerEditItemstyles from './Owneredititemsstyles';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
const App = () => {
  const {
    data,
    setGender,
    visible,
    setViisble,
    name,
    handleedit,
    description,
    setEventType,
    setOutfitType,
    setItemType,
    imageUrls,
    selectedImage,
    RemoveProducts,
    handleremove,
    pickImg,
    pref,
    closeModal,
    handleGenderChange,
    handleEventTypeChange,
    handleOutfitChange,
    handleItemTypeChange,
    setName,
    setDescription,
    handleSizeTypeChange,
    setSelectedsize,
    setPrice,
    setQuantity,
    setEditProductId,
    getOwnerProducts,
    FetchData,
    Mapdata,
    price,
    quantity,
  } = Useowneredititems();
  const [hideId, setHideId] = useState(null);
  console.log(data);
  console.log('Mapped Data is :', Mapdata);

  const handleVisibleModal = () => {
    setViisble(!visible);
    setHideId(null);
  };
  const navigation = useNavigation();
  console.log('data :', data);
  return (
    <SafeAreaView>
      <View style={styles.header_container} />
      <Modal animationType="slide" visible={visible}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.form}>
              <TouchableOpacity onPress={handleVisibleModal}>
                <Text style={styles.txtClose}>Close</Text>
              </TouchableOpacity>
              <View style={Ownerstyles.Scrollcontainer}>
                <View style={Ownerstyles.scroll}>
                  <Text style={Ownerstyles.Itemname}>Name</Text>
                  <TextInput
                    style={Ownerstyles.Namefield}
                    onChangeText={setName}
                    defaultValue={Mapdata.name}
                  />
                  <Text style={Ownerstyles.Itemname}>Description</Text>
                  <TextInput
                    style={Ownerstyles.Descriptionfield}
                    onChangeText={setDescription}
                    multiline
                    defaultValue={Mapdata.description}
                  />
                  <Text style={Ownerstyles.Itemname}>Select Gender</Text>
                  <GenderDropdown
                    onSelectGender={setGender}
                    onChange={handleGenderChange}
                  />
                  <Text style={Ownerstyles.Itemname}>Select Type</Text>
                  <TypeDropdown
                    onSelectType={setItemType}
                    onChange={handleItemTypeChange}
                  />
                  <Text style={Ownerstyles.Itemname}>Select Event</Text>
                  <EventsDropdown
                    onSelectEvent={setEventType}
                    onChange={handleEventTypeChange}
                  />
                  <Text style={Ownerstyles.Itemname}>Select Outfit </Text>
                  <OutfitDropdown
                    onSelectOutfit={setOutfitType}
                    onChange={handleOutfitChange}
                  />
                  <View style={OwnerEditItemstyles.Sizecontainer}>
                    <Text style={OwnerEditItemstyles.Sizetext}> Size</Text>
                    <Sizeselection
                      onSelectSize={setSelectedsize}
                      onChange={handleSizeTypeChange}
                    />
                  </View>
                  <View style={OwnerEditItemstyles.ImageBox}>
                    <Text style={OwnerEditItemstyles.addImagesText}>
                      Add Images *
                    </Text>
                    {selectedImage ? (
                      <>
                        <ScrollView
                          horizontal
                          style={OwnerEditItemstyles.imagehorizontal}>
                          {imageUrls.map((image, index) => (
                            <Image
                              style={OwnerEditItemstyles.image}
                              source={{uri: image}}
                              key={index}
                            />
                          ))}
                        </ScrollView>
                        <View style={OwnerEditItemstyles.removeContainer}>
                          <TouchableOpacity
                            onPress={handleremove}
                            style={OwnerEditItemstyles.touchableContainer}>
                            <Text style={OwnerEditItemstyles.removeText}>
                              Remove
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      // <Mainbutton onPress={undefined} text="remove" />
                      <View style={OwnerEditItemstyles.Addimage}>
                        <MaterialIcons
                          style={OwnerEditItemstyles.AddIcon}
                          name="add-to-photos"
                        />
                        <Text
                          onPress={pickImg}
                          style={OwnerEditItemstyles.imagesText}>
                          Add Image
                        </Text>
                      </View>
                    )}
                  </View>
                  <View>
                    <Text style={OwnerEditItemstyles.Pricetext}> Price</Text>
                    {console.log('Price is ', price)}
                    <TextInput
                      style={OwnerEditItemstyles.Price}
                      keyboardType="numeric"
                      value={price.toString()}
                      onChangeText={(value: any) => setPrice(value)}
                    />
                    <Text style={OwnerEditItemstyles.Pricetext}> Quantity</Text>
                    <TextInput
                      keyboardType="numeric"
                      style={OwnerEditItemstyles.Price}
                      value={quantity.toString()}
                      onChangeText={(value: any) => setQuantity(value)}
                    />
                    {/* <Mainbutton text="Continue" onPress={handleItems} /> */}
                  </View>
                  <View style={Ownerstyles.mainButton}>
                    <TouchableOpacity
                      style={Ownerstyles.mainTouchable}
                      onPress={handleedit}>
                      <Text style={Ownerstyles.touchableText}>Edit Item</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={OwnerEditItemstyles.backContainer}>
            <Icons name="chevron-back" color={'#3E54AC'} size={30} />
            <Text style={OwnerEditItemstyles.backButtonText}>Edit Items</Text>
          </View>
        </TouchableOpacity>

        {data.map(item => {
          return (
            <>
              <View style={styles.item_course} key={item}>
                <View style={OwnerEditItemstyles.imagePriceContainer}>
                  <View style={OwnerEditItemstyles.cardImageContainer}>
                    <Image
                      style={OwnerEditItemstyles.cardImage}
                      source={{uri: item.image}}
                    />
                  </View>
                  <View style={OwnerEditItemstyles.priceContainer}>
                    <Text style={styles.txt_name}>{item.name}</Text>
                    <Text style={styles.txt_item}>₹ {item.price}</Text>
                  </View>
                </View>
                <View style={OwnerEditItemstyles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => FetchData()}
                    onPressIn={() => setEditProductId(item.id)}>
                    <View style={OwnerEditItemstyles.button}>
                      <Text style={styles.txt_edit}>Edit</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => RemoveProducts(item.id)}>
                    <View style={OwnerEditItemstyles.button}>
                      <Text style={styles.txt_del}>Delete</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <CustomModal
                showModal={showModal}
                onClose={closeModal}
                message="Need to set Rental dates!"
              /> */}
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  form: {
    // padding: 15,
    // backgroundColor : "#e3e3e3",
    marginTop: 10,
    backgroundColor: Colors.main,
    marginLeft: -10,
  },

  txtClose: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
    marginRight: 15,
    color: Colors.iconscolor,
  },
  text_input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 10,
  },
  header_container: {
    // padding: 15,
    // backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt_main: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  item_course: {
    // padding: 15,
    marginLeft: 30,
    marginTop: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#e2e2e2',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  txt_name: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: '600',
    color: '#3E54ACCC',
  },
  txt_item: {
    fontSize: 10,
    // marginTop: 5,
    fontWeight: '600',
    color: '#3E54AC99',
  },
  txt_enabled: {
    fontSize: 14,
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  txt_disabled: {
    fontSize: 14,
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  txt_del: {
    fontSize: 15,
    // marginTop: 5,
    color: 'white',
    fontWeight: '500',
  },
  txt_edit: {
    fontSize: 15,
    // marginTop: 5,
    color: 'white',
    fontWeight: '500',
  },
  btnContainer: {
    display: 'flex',
    padding: 15,
    backgroundColor: '#000',
    marginTop: 20,
  },
  btnNewContainer: {
    padding: 10,
    backgroundColor: '#000',
  },
  textButton: {
    textAlign: 'center',
    color: '#FFF',
  },
});
