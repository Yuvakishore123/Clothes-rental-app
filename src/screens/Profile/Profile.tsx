import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

// import styles from '../Profile/profilestyles';
import style from './profileStyles';
import ImagePicker from 'react-native-image-picker';

import {Image} from 'react-native';
import AddImages from '../../components/atoms/AddImages';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Logout} from '../../redux/actions/actions';
import {useDispatch} from 'react-redux';

type Props = {
  navigation: any;
};

const Profile = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <ScrollView>
      <View style={style.profileStyle}>
        <View style={style.buttonContainer}>
          <SwitchAccountButton />
        </View>

        <View style={style.imageContainer}>
          <AddImages />
        </View>

        <View>
          <Text style={style.profileText}>Vishal</Text>
        </View>

        <View style={style.profileFields}>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('')}>
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>My Orders</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={style.btnfield} onPress={handleLogout}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

// import React from 'react';
// import {View, TouchableOpacity} from 'react-native';
// import {Text} from 'react-native-paper';
// import {useDispatch} from 'react-redux';
// import {Logout} from '../../redux/actions/actions';
// import MyHeader from '../../components/molecules/MyHeader';
// // import BottomTab from '../../components/molecules/BottomTab';
// import Editprofile from '../Ownereditprofile/Ownereditprofile';
// import style from './profileStyles';
// import {Image} from 'react-native';
// import styles from '../Ownereditprofile/Ownereditprofilestyle';
// import {useNavigation} from '@react-navigation/native';
// import OwnerEditProfile from '../Ownereditprofile/Ownereditprofile';
// import Owneraddaddress from '../Owneraddaddress/Owneraddaddress';
// import Owneraddresspage from '../Owneraddaddress/Owneraddresspage';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
// import UseOwnerprofile from '../Ownerprofile/useOwnerProfile';
// type Props = {
//   route: {name: string};
// };
// export default function Profile({route}: Props) {
//   const {Name, phoneNumber, email} = UseOwnerprofile();
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const submit = () => {
//     dispatch(Logout());
//   };
//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.addAddressHeader}>
//         <TouchableOpacity
//           style={styles.backBtn}
//           onPress={() => {
//             navigation.goBack();
//           }}>
//           <MaterialCommunityIcons
//             name="arrow-left"
//             color={Colors.iconscolor}
//             size={26}
//           />
//         </TouchableOpacity>
//         <Text style={styles.addAddressText}>{Name}</Text>
//       </View>
//       <View style={style.container}>
//         <View style={style.buttonContainer}>
//           <SwitchAccountButton />
//         </View>
//         <View style={style.profileStyle}>
//           <View>
//             <Image
//               source={require('../../../Assets/UserProfilePic.jpg')}
//               style={style.profileImg}
//             />
//           </View>
//           <View>
//             <Text style={style.profileText}>John</Text>
//           </View>
//           <View style={style.profileFields}>
//             <TouchableOpacity style={style.whiteBtn}>
//               <Text
//                 style={style.btnPText}
//                 onPress={() => navigation.navigate(OwnerEditProfile)}>
//                 Edit Profile
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={style.whiteBtn}>
//               <Text
//                 style={style.btnPText}
//                 onPress={() => navigation.navigate(Owneraddresspage)}>
//                 Address
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={style.whiteBtn}>
//               <Text style={style.btnPText}>My Orders</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity onPress={submit} style={style.btnfield}>
//               <Text style={style.btntext}>Logout </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={style.bottomTabWrapper}>
//         {/* <BottomTab navigation={navigation} /> */}
//       </View>
//     </View>
//   );
// }
