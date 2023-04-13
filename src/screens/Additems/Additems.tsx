import React from 'react';
import Additems from './AdditemsLogic';
import {View} from 'react-native';
import styles from './Additemsstyle';
import OwnerBottomTab from '../../components/molecules/OwnerBottomTab';
type Props = {
  route: {name: string};
  navigation: any;
};
function OwnerItems({navigation}: Props) {
  return (
    <View style={styles.mainContainer}>
      <Additems />
      <View style={{marginTop: 10}}>
        <OwnerBottomTab navigation={navigation} />
      </View>
    </View>
  );
}
export default OwnerItems;
