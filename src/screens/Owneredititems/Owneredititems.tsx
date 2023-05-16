import React, {useState} from 'react';
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
import BackButton from '../../components/atoms/BackButton/BackButton';
import HeadingText from '../../components/atoms/HeadingText/HeadingTest';
const App = () => {
  const {
    data,
    setGender,
    visible,
    setViisble,
    handleedit,
    setEventType,
    setOutfitType,
    setItemType,
    imageUrls,
    selectedImage,
    RemoveProducts,
    handleremove,
    pickImg,
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
    FetchData,
    Mapdata,
    price,
    quantity,
  } = Useowneredititems();
  const [, setHideId] = useState(null);
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
      <Modal animationType="slide" visible={visible}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.form}>
              <BackButton />
              <HeadingText message="Edit product" />
              <View style={Ownerstyles.Scrollcontainer}>
                <View style={Ownerstyles.scrolledit}>
                  <TextInput
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    placeholder="Name"
                    style={[Ownerstyles.Namefield, {paddingLeft: 22}]}
                    onChangeText={setName}
                    defaultValue={Mapdata.name}
                  />
                  <TextInput
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    placeholder="Description"
                    multiline
                    style={[Ownerstyles.Descriptionfield, {paddingLeft: 22}]}
                    onChangeText={setDescription}
                    multiline
                    defaultValue={Mapdata.description}
                  />
                  <GenderDropdown
                    onSelectGender={setGender}
                    onChange={handleGenderChange}
                  />
                  <View style={{marginTop: -18}}>
                    <TypeDropdown
                      onSelectType={setItemType}
                      onChange={handleItemTypeChange}
                    />
                  </View>
                  <View style={{marginTop: -26}}>
                    <EventsDropdown
                      onSelectEvent={setEventType}
                      onChange={handleEventTypeChange}
                    />
                  </View>
                  <View style={{marginTop: -12}}>
                    <OutfitDropdown
                      onSelectOutfit={setOutfitType}
                      onChange={handleOutfitChange}
                    />
                  </View>
                  <View style={OwnerEditItemstyles.Sizecontainer}>
                    <View style={{marginTop: -16}}>
                      <Sizeselection
                        onSelectSize={setSelectedsize}
                        onChange={handleSizeTypeChange}
                      />
                    </View>
                  </View>
                  <View style={OwnerEditItemstyles.ImageBox}>
                    <View style={{marginTop: -20}}>
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
                        <View style={OwnerEditItemstyles.Addimage}>
                          <Text
                            onPress={pickImg}
                            style={OwnerEditItemstyles.imagesText}>
                            Add Image
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                  <View>
                    <TextInput
                      style={[OwnerEditItemstyles.Price, {paddingLeft: 15}]}
                      placeholder="Select price"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      keyboardType="numeric"
                      value={price.toString()}
                      onChangeText={(value: any) => setPrice(value)}
                    />
                    <TextInput
                      keyboardType="numeric"
                      placeholder="Select quantity"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      style={[OwnerEditItemstyles.Price, {paddingLeft: 15}]}
                      value={quantity.toString()}
                      onChangeText={(value: any) => setQuantity(value)}
                    />
                  </View>
                  <View style={Ownerstyles.mainButton}>
                    <TouchableOpacity
                      style={Ownerstyles.mainTouchable}
                      onPress={handleedit}>
                      <Text style={Ownerstyles.touchableText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
      <ScrollView>
        <View style={OwnerEditItemstyles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={OwnerEditItemstyles.backButtonCircle}>
              <Icons
                name="chevron-back"
                color={'#FFFFFF'}
                size={25}
                marginTop={5}
                marginLeft={6}
              />
            </View>
          </TouchableOpacity>
          <Text style={OwnerEditItemstyles.backButtonText}>Edit products</Text>
        </View>

        {data.map(item => {
          return (
            <View style={styles.mainContainer}>
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
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  form: {
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
  mainContainer: {
    backgroundColor: '#000000',
    height: 250,
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
    marginLeft: 30,
    marginTop: 15,
    flexDirection: 'row',
  },
  txt_name: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
  txt_item: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9747FF',
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
    color: 'white',
    fontWeight: '500',
  },
  txt_edit: {
    fontSize: 15,
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
