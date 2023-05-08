// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import React, {useEffect} from 'react';
// import EventsDropdown from '../../components/atoms/EventsDropdown';
// import GenderDropdown from '../../components/atoms/GenderDropdown';
// import OutfitDropdown from '../../components/atoms/OutfitDropdown';
// import Sizeselection from '../../components/atoms/Sizeselect';
// import TypeDropdown from '../../components/atoms/TypeDropdown';
// import Ownerstyles from '../Additems/Additemsstyle';
// import OwnerImagestyles from '../OwnerImage/OwnerImagestyles';
// import Useowneredititems from './Useowneredititems';
// import useEditItems from './useEdititems';
// import Colors from '../../constants/Colors';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchDataPending} from '../../redux/slice/editItemSlice';
// // import styles from '../SignUp/Signupstyle';

// const EditItemsPage = () => {
//   const data = useSelector(state => state.editItem.data);
//   const productsData = data ? data.productsData : null;
//   const dispatch = useDispatch();
//   const {
//     // data,
//     handleGenderChange,
//     setGender,
//     setEventType,
//     setOutfitType,
//     setItemType,
//     handleEventTypeChange,
//     handleOutfitChange,
//     handleItemTypeChange,
//     setName,
//     setDescription,
//     handleedit,
//     handleSizeTypeChange,
//     setSelectedsize,
//     setPrice,
//     setQuantity,
//     setEditProductId,
//     selectedItem,
//     handleName,
//     handleEditItems,
//   } = Useowneredititems();
//   const {
//     name,
//     price,
//     description,
//     quantity,
//     handleBack,
//     handleprice,
//     handlePriceChange,
//     handleClick,
//     handlequantityChange,
//   } = useEditItems();

//   useEffect(() => {
//     dispatch(fetchDataPending());
//   }, [dispatch]);

//   console.log('pranay bhai', data);
//   return (
//     <SafeAreaView>
//       <View style={styles.header_container} />
//       {/* <Modal animationType="slide" visible={visible}> */}
//       <SafeAreaView>
//         <ScrollView>
//           <View style={styles.form}>
//             <TouchableOpacity onPress={handleBack}>
//               <Text style={styles.txtClose}>Close</Text>
//             </TouchableOpacity>
//             <View style={Ownerstyles.Scrollcontainer}>
//               <View style={Ownerstyles.scroll}>
//                 <Text style={Ownerstyles.Itemname}>Name</Text>
//                 <TextInput
//                   style={OwnerImagestyles.Price}
//                   onChangeText={setName}
//                   defaultValue={productsData?.name}
//                 />
//                 <Text style={Ownerstyles.Itemname}>Description</Text>
//                 <TextInput
//                   style={OwnerImagestyles.Price}
//                   onChangeText={setDescription}
//                   multiline
//                   defaultValue={productsData?.description}
//                 />
//                 <Text onPress={handleprice} style={Ownerstyles.Itemname}>
//                   Select Gender
//                 </Text>
//                 <GenderDropdown
//                   onSelectGender={setGender}
//                   onChange={handleGenderChange}
//                 />
//                 <Text style={Ownerstyles.Itemname}>Select Type</Text>
//                 <TypeDropdown
//                   onSelectType={setItemType}
//                   onChange={handleItemTypeChange}
//                 />
//                 <Text style={Ownerstyles.Itemname}>Select Event</Text>
//                 <EventsDropdown
//                   onSelectEvent={setEventType}
//                   onChange={handleEventTypeChange}
//                 />
//                 <Text style={Ownerstyles.Itemname}>Select Outfit </Text>
//                 <OutfitDropdown
//                   onSelectOutfit={setOutfitType}
//                   onChange={handleOutfitChange}
//                 />
//                 <View style={OwnerImagestyles.Sizecontainer}>
//                   <Text style={OwnerImagestyles.Sizetext}> Size</Text>
//                   <Sizeselection
//                     onSelectSize={setSelectedsize}
//                     onChange={handleSizeTypeChange}
//                   />
//                 </View>
//                 <Text style={OwnerImagestyles.Pricetext}> Price</Text>
//                 <TextInput
//                   style={OwnerImagestyles.Price}
//                   value={productsData?.price.toString()}
//                   keyboardType="numeric"
//                   onChangeText={handlePriceChange}
//                 />
//                 <Text style={OwnerImagestyles.Pricetext}> Quantity</Text>
//                 <TextInput
//                   keyboardType="numeric"
//                   value={productsData?.quantity.toString()}
//                   style={OwnerImagestyles.Price}
//                   onChangeText={handlequantityChange}
//                 />
//                 {/* <Mainbutton text="Continue" onPress={handleItems} /> */}
//                 <View style={Ownerstyles.mainButton}>
//                   <TouchableOpacity
//                     style={Ownerstyles.mainTouchable}
//                     onPress={handleedit}>
//                     <Text style={Ownerstyles.touchableText}>Edit Item</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </SafeAreaView>
//   );
// };

// export default EditItemsPage;

// const styles = StyleSheet.create({
//   form: {
//     // padding: 15,
//     // backgroundColor : "#e3e3e3",
//     marginTop: 10,
//     backgroundColor: Colors.main,
//   },

//   txtClose: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     textAlign: 'right',
//     marginRight: 15,
//     color: Colors.iconscolor,
//   },
//   text_input: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   header_container: {
//     // padding: 15,
//     // backgroundColor: '#000',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   txt_main: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   item_course: {
//     // padding: 15,
//     marginLeft: 30,
//     marginTop: 15,
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#e2e2e2',
//     flexDirection: 'row',
//     // justifyContent: 'space-between',
//     // backgroundColor: 'green',
//   },
//   txt_name: {
//     fontSize: 12,
//     // marginTop: 5,
//     fontWeight: '600',
//     color: '#3E54ACCC',
//   },
//   txt_item: {
//     fontSize: 10,
//     // marginTop: 5,
//     fontWeight: '600',
//     color: '#3E54AC99',
//   },
//   txt_enabled: {
//     fontSize: 14,
//     marginTop: 5,
//     color: 'green',
//     fontWeight: 'bold',
//   },
//   txt_disabled: {
//     fontSize: 14,
//     marginTop: 5,
//     color: 'green',
//     fontWeight: 'bold',
//   },
//   txt_del: {
//     fontSize: 15,
//     // marginTop: 5,
//     color: 'white',
//     fontWeight: '500',
//   },
//   txt_edit: {
//     fontSize: 15,
//     // marginTop: 5,
//     color: 'white',
//     fontWeight: '500',
//   },
//   btnContainer: {
//     display: 'flex',
//     padding: 15,
//     backgroundColor: '#000',
//     marginTop: 20,
//   },
//   btnNewContainer: {
//     padding: 10,
//     backgroundColor: '#000',
//   },
//   textButton: {
//     textAlign: 'center',
//     color: '#FFF',
//   },
// });
