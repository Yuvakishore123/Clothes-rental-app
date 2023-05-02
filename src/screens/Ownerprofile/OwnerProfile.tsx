import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import AddImages from '../../components/atoms/AddImages';
import ProfileData from '../../constants/ProfileData';
type Props = {
  navigation: any;
};
const OwnerProfile = ({navigation}: Props) => {
  const {name} = ProfileData();
  return (
    <View style={style.profileStyle}>
      <ScrollView>
        <View style={style.buttonContainer}>
          <SwitchAccountButton />
        </View>
        <View style={style.imageContainer}>
          <AddImages />
        </View>
        <View>
          <Text style={style.profileText}>{name}</Text>
        </View>
        <View style={style.profileFields}>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('OwnerEditProfile')}>
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneredititems')}>
            <Text style={style.btnPText}>My Products</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('MyRentals')}>
            <Text style={style.btnPText}>My Rentals</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneraddresspage')}>
            <Text style={style.AddressbtnPText}>Address</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={style.btnfield}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginTop: 10}} />
    </View>
  );
};

export default OwnerProfile;

// import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
// import React from 'react';
// import style from './OwnerProfilestyle';
// import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
// import AddImages from '../../components/atoms/AddImages';
// import UseOwnerprofile from './useOwnerProfile';
// type Props = {
//   navigation: any;
// };
// const OwnerProfile = ({navigation}: Props) => {
//   const {Name, phoneNumber, lastName, email, submit} = UseOwnerprofile();
//   return (
//     <View style={style.profileStyle}>
//       <ScrollView>
//         <View style={style.buttonContainer}>
//           <SwitchAccountButton />
//         </View>
//         <View style={style.imageContainer}>
//           {/* <Image
//             source={require('../../../assets/images/UserProfilePic.jpg')}
//             style={style.profileImg}
//           /> */}
//           <AddImages />
//         </View>
//         <View>
//           <Text style={style.profileText}>
//             {Name}+{lastName}
//           </Text>
//         </View>
//         <View style={style.profileFields}>
//           <TouchableOpacity
//             style={style.whiteBtn}
//             onPress={() => navigation.navigate('OwnerEditProfile')}>
//             <Text style={style.btnPText}>Edit Profile</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={style.whiteBtn}
//             onPress={() => navigation.navigate('Owneredititems')}>
//             <Text style={style.btnPText}>My Products</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={style.whiteBtn}
//             onPress={() => navigation.navigate('MyRentals')}>
//             <Text style={style.btnPText}>My Rentals</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={style.whiteBtn}
//             onPress={() => navigation.navigate('Owneraddresspage')}>
//             <Text style={style.btnPText}>Address</Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <TouchableOpacity onPress={submit} style={style.btnfield}>
//             <Text style={style.btntext}>Logout </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//       <View style={{marginTop: 10}} />
//     </View>
//   );
// };
// // const styles = StyleSheet.create({
// //   buttonContainer: {
// //     top: 0,
// //     right: 0,
// //     margin: 20,
// //     marginLeft: 180,
// //     // marginRight: 0,
// //   },
// // });
// export default OwnerProfile;
