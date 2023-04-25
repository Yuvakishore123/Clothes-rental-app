// import {Image, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import OwnerImagestyles from './OwnerImagestyles';
// import Sizeselection from '../../components/atoms/Sizeselect';
// import {ScrollView, TextInput} from 'react-native-gesture-handler';
// import Mainbutton from '../../components/atoms/MainButton';
// import Useownerimage from './Useownerimage';
// import Styles from '../LoginScreen/LoginStyle';
// import Colors from '../../constants/Colors';
// export default function Owneraddimages() {
//   const {
//     postData,
//     onHandleOwnerItems,
//     // Onhandlepress,
//     handleSizeTypeChange,
//     setSelectedsize,
//     setPrice,
//     setQuantity,
//     setSelectedImage,
//     handlePriceChange,
//     handleQuantityChange,
//     handleSelectedImage,
//     handleBlur,
//     handleremove,
//     onSelectImage,
//     selectedImage,
//     formik,
//   } = Useownerimage();
//   return (
//     <ScrollView style={OwnerImagestyles.Scroll}>
//       <View style={OwnerImagestyles.TitletextContainer}>
//         <MaterialIcons
//           style={OwnerImagestyles.Icon}
//           onPress={onHandleOwnerItems}
//           name="arrow-back-ios"
//         />
//         <Text style={OwnerImagestyles.TitleText}>Add Items</Text>
//       </View>
//       <View style={OwnerImagestyles.form}>
//         <View style={OwnerImagestyles.ImageBox}>
//           <Text style={OwnerImagestyles.addImagesText}>Add Images *</Text>
//           {selectedImage ? (
//             <>
//               <Image
//                 style={OwnerImagestyles.image}
//                 source={{uri: selectedImage}}
//               />
//               <View style={OwnerImagestyles.removeContainer}>
//                 <TouchableOpacity
//                   onPress={handleremove}
//                   style={OwnerImagestyles.touchableContainer}>
//                   <Text style={OwnerImagestyles.removeText}>Remove</Text>
//                 </TouchableOpacity>
//               </View>
//             </>
//           ) : (
//             // <Mainbutton onPress={undefined} text="remove" />
//             <View style={OwnerImagestyles.Addimage}>
//               <TouchableOpacity
//                 onPress={onSelectImage}
//                 onBlur={() => handleBlur('image')}>
//                 <MaterialIcons
//                   style={OwnerImagestyles.AddIcon}
//                   name="add-to-photos"
//                 />
//                 <Text style={OwnerImagestyles.imagesText}>Add Image</Text>
//               </TouchableOpacity>
//               {formik.touched.image && formik.errors.image && (
//                 <Text style={Styles.errorText}>{formik.errors.image}</Text>
//               )}
//             </View>
//           )}
//           <View style={OwnerImagestyles.Sizecontainer}>
//             <Text style={OwnerImagestyles.Sizetext}> Size *</Text>
//             <Sizeselection
//               onSelectSize={setSelectedsize}
//               onChange={handleSizeTypeChange}
//               onBlur={() => formik.setFieldTouched('size')}
//             />
//           </View>
//           <View style={{marginTop: 20}}>
//             {formik.touched.size && formik.errors.size && (
//               <Text style={Styles.errorText}>{formik.errors.size}</Text>
//             )}
//           </View>
//           <Text style={OwnerImagestyles.Pricetext}> Price *</Text>
//           <TextInput
//             style={OwnerImagestyles.Price}
//             keyboardType="numeric"
//             // onChangeText={(value: any) => setPrice(value)}
//             onChangeText={handlePriceChange}
//             onBlur={() => handleBlur('price')}
//           />
//           {formik.touched.price && formik.errors.price && (
//             <Text style={Styles.errorText}>{formik.errors.price}</Text>
//           )}
//           <Text style={OwnerImagestyles.Quantitytext}> Quantity *</Text>
//           <TextInput
//             keyboardType="numeric"
//             style={OwnerImagestyles.Price}
//             // onChangeText={(value: any) => setQuantity(value)}
//             onChangeText={handleQuantityChange}
//             onBlur={() => handleBlur('quantity')}
//           />
//           {formik.touched.quantity && formik.errors.quantity && (
//             <Text style={Styles.errorText}>{formik.errors.quantity}</Text>
//           )}
//           {/* <Mainbutton onPress={postData} text="Add Items" /> */}
//           <View style={Styles.mainButton}>
//             <TouchableOpacity
//               disabled={!formik.isValid}
//               onPress={formik.handleSubmit}
//               style={[
//                 Styles.buttonColor,
//                 {
//                   backgroundColor: formik.isValid
//                     ? Colors.iconscolor
//                     : '#A5C9CA',
//                 },
//               ]}>
//               <Text style={Styles.touchableText}>Add Items</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// import {Image, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import OwnerImagestyles from './OwnerImagestyles';
// import Sizeselection from '../../components/atoms/Sizeselect';
// import {ScrollView, TextInput} from 'react-native-gesture-handler';
// import Mainbutton from '../../components/atoms/MainButton';
// import Useownerimage from './Useownerimage';

// export default function Owneraddimages() {
//   const {
//     postData,
//     onHandleOwnerItems,
//     // Onhandlepress,
//     handleSizeTypeChange,
//     setSelectedsize,
//     setPrice,
//     setQuantity,
//     setSelectedImage,
//     handleremove,
//     onSelectImage,
//     selectedImage,
//   } = Useownerimage();
//   return (
//     <ScrollView style={OwnerImagestyles.Scroll}>
//       <View style={OwnerImagestyles.TitletextContainer}>
//         <MaterialIcons
//           style={OwnerImagestyles.Icon}
//           onPress={onHandleOwnerItems}
//           name="arrow-back-ios"
//         />
//         <Text style={OwnerImagestyles.TitleText}>Add Items</Text>
//       </View>
//       <View style={OwnerImagestyles.form}>
//         <View style={OwnerImagestyles.ImageBox}>
//           <Text style={OwnerImagestyles.addImagesText}>Add Images</Text>
//           {selectedImage ? (
//             <>
//               <Image
//                 style={OwnerImagestyles.image}
//                 source={{uri: selectedImage}}
//               />
//               <View style={OwnerImagestyles.removeContainer}>
//                 <TouchableOpacity
//                   onPress={handleremove}
//                   style={OwnerImagestyles.touchableContainer}>
//                   <Text style={OwnerImagestyles.removeText}>Remove</Text>
//                 </TouchableOpacity>
//               </View>
//             </>
//           ) : (
//             // <Mainbutton onPress={undefined} text="remove" />
//             <View style={OwnerImagestyles.Addimage}>
//               <MaterialIcons
//                 style={OwnerImagestyles.AddIcon}
//                 name="add-to-photos"
//               />
//               <Text onPress={onSelectImage} style={OwnerImagestyles.imagesText}>
//                 Add Image
//               </Text>
//             </View>
//           )}
//           <View style={OwnerImagestyles.Sizecontainer}>
//             <Text style={OwnerImagestyles.Sizetext}> Size</Text>
//             <Sizeselection
//               onSelectSize={setSelectedsize}
//               onChange={handleSizeTypeChange}
//             />
//           </View>
//           <Text style={OwnerImagestyles.Pricetext}> Price</Text>
//           <TextInput
//             style={OwnerImagestyles.Price}
//             keyboardType="numeric"
//             onChangeText={(value: any) => setPrice(value)}
//           />
//           <Text style={OwnerImagestyles.Quantitytext}> Quantity</Text>
//           <TextInput
//             keyboardType="numeric"
//             style={OwnerImagestyles.Price}
//             onChangeText={(value: any) => setQuantity(value)}
//           />
//           <Mainbutton onPress={postData} text="Add Items" />
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
///=============


import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OwnerImagestyles from './OwnerImagestyles';
import Sizeselection from '../../components/atoms/Sizeselect';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Mainbutton from '../../components/atoms/MainButton';
import Useownerimage from './Useownerimage';
import Styles from '../LoginScreen/LoginStyle';
import Colors from '../../constants/Colors';
export default function Owneraddimages() {
  const {
    postData,
    onHandleOwnerItems,
    // Onhandlepress,
    handleSizeTypeChange,
    setSelectedsize,
    setPrice,
    setQuantity,
    setSelectedImage,
    handlePriceChange,
    handleQuantityChange,
    handleSelectedImage,
    handleBlur,
    handleremove,
    onSelectImage,
    selectedImage,
    formik,
  } = Useownerimage();
  return (
    <ScrollView style={OwnerImagestyles.Scroll}>
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
              <Image
                style={OwnerImagestyles.image}
                source={{uri: selectedImage}}
              />
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
              <TouchableOpacity
                onPress={onSelectImage}
                onBlur={() => handleBlur('image')}>
                <MaterialIcons
                  style={OwnerImagestyles.AddIcon}
                  name="add-to-photos"
                />
                <Text style={OwnerImagestyles.imagesText}>Add Image</Text>
              </TouchableOpacity>
              {formik.touched.image && formik.errors.image && (
                <Text style={Styles.errorText}>{formik.errors.image}</Text>
              )}
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
                Styles.buttonColor,
                {
                  // backgroundColor: formik.isValid
                  //   ? Colors.iconscolor
                  //   : '#A5C9CA',
                  // width: 309,
                  // height: 39,
                  // borderRadius: 8,
                  // backgroundColor: '#3E54AC',
                  // boxShadow: '0px 2px 8px',

                  height: 59,
                  width: 133,
                  backgroundColor: '#3E54AC',
                  // margin: 15,
                  marginTop: 5,
                  borderRadius: 8,
                  color: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={Styles.touchableText}>Add Items</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
