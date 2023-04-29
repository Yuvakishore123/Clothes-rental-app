import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
type Props = {
  fromDate: Date;
  toDate: Date;
  onFromDateChange: (date: Date) => void;
  onToDateChange: (date: Date) => void;
};
const DatePicker = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}: Props) => {
  const showFromDatepicker = () => {
    setShowFromPicker(true);
  };
  const showToDatepicker = () => {
    setShowToPicker(true);
  };
  const onChangeFrom = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromPicker(Platform.OS === 'ios');
    onFromDateChange(currentDate);
  };
  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToPicker(Platform.OS === 'ios');
    onToDateChange(currentDate);
  };
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showFromDatepicker}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>
            From: {fromDate.toLocaleDateString()}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={showToDatepicker}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>To: {toDate.toLocaleDateString()}</Text>
        </View>
      </TouchableOpacity>
      {showFromPicker && (
        <View style={[styles.datePicker]}>
          <DateTimePicker
            value={fromDate}
            mode="date"
            display="date"
            onChange={onChangeFrom}
          />
        </View>
      )}
      {showToPicker && (
        <View style={[styles.datePicker]}>
          <DateTimePicker
            value={toDate}
            mode="date"
            display="date"
            onChange={onChangeTo}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  datePicker: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 30,
  },
  dateBox: {
    // borderColor: 'green',
    borderColor: '#3E54AC',
    borderWidth: 3,
    // backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  dateText: {
    fontSize: 18,
  },
});
export default DatePicker;
