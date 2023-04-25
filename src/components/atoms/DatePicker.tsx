import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const onChangeFrom = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromPicker(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToPicker(Platform.OS === 'ios');
    setToDate(currentDate);
  };

  const showFromDatepicker = () => {
    setShowFromPicker(true);
  };

  const showToDatepicker = () => {
    setShowToPicker(true);
  };

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
        <DateTimePicker
          value={fromDate}
          mode="date"
          display="default"
          onChange={onChangeFrom}
        />
      )}
      {showToPicker && (
        <DateTimePicker
          value={toDate}
          mode="date"
          display="default"
          onChange={onChangeTo}
        />
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

// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const DatePicker = () => {
//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(new Date());
//   const [showFromPicker, setShowFromPicker] = useState(false);
//   const [showToPicker, setShowToPicker] = useState(false);

//   const onChangeFrom = (event, selectedDate) => {
//     const currentDate = selectedDate || fromDate;
//     setShowFromPicker(Platform.OS === 'ios');
//     setFromDate(currentDate);
//   };

//   const onChangeTo = (event, selectedDate) => {
//     const currentDate = selectedDate || toDate;
//     setShowToPicker(Platform.OS === 'ios');
//     setToDate(currentDate);
//   };

//   const showFromDatepicker = () => {
//     setShowFromPicker(true);
//   };

//   const showToDatepicker = () => {
//     setShowToPicker(true);
//   };

//   return (
//     <View style={styles.datePickerContainer}>
//       <TouchableOpacity onPress={showFromDatepicker}>
//         <View style={styles.dateBox}>
//           <Text style={styles.dateText}>
//             From: {fromDate.toLocaleDateString()}
//           </Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={showToDatepicker}>
//         <View style={styles.dateBox}>
//           <Text style={styles.dateText}>To: {toDate.toLocaleDateString()}</Text>
//         </View>
//       </TouchableOpacity>
//       {showFromPicker && (
//         <View style={styles.datePicker}>
//           <DateTimePicker
//             value={fromDate}
//             mode="date"
//             display="default"
//             onChange={onChangeFrom}
//           />
//         </View>
//       )}
//       {showToPicker && (
//         <View style={styles.datePicker}>
//           <DateTimePicker
//             value={toDate}
//             mode="date"
//             display="default"
//             onChange={onChangeTo}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   datePickerContainer: {
//     position: 'relative', // Add this style to make the date picker appear on top of other elements
//   },
//   datePicker: {
//     position: 'absolute', // Add this style to position the date picker on top of other elements
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   dateBox: {
//     backgroundColor: '#eee',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   dateText: {
//     fontSize: 18,
//   },
// });
