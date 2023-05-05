/* eslint-disable react-native/no-inline-styles */
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './CustomModelStyles';
const CustomModal = ({showModal, onClose, message}) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent>
      <View style={style.modalContainer}>
        <View style={style.modalBox}>
          <Text style={style.modalText}>{message}</Text>
          <View style={{marginTop: 15}}>
            <TouchableOpacity
              onPress={onClose}
              style={{
                backgroundColor: '#3E54AC',
                borderRadius: 40,
                width: 200,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  padding: 9,
                  borderRadius: 30,
                  textAlign: 'center',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default CustomModal;