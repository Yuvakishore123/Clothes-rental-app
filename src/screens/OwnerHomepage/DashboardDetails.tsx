// /* eslint-disable react-native/no-inline-styles */
// import React, {useEffect, useState} from 'react';
// import {
//   Image,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import {VictoryChart, VictoryBar} from 'victory-native';
// import Colors from '../../constants/Colors';
// import useAnalytics from '../AnalyticsPage/useAnalytics';
// import style from '../OwnerHomepage/OwnerHomestyle';
// import BackButton from '../../components/atoms/BackButton/BackButton';
// import Lottie from 'lottie-react-native';
// const monthNames = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];
// const DashboardDetails = () => {
//   const {handleAnalytics, Data, handleOrders, orderData, loading, piechart} =
//     useAnalytics();
//   const [showModel, setShowModel] = useState(false);
//   const [selectedBarIndex, setSelectedBarIndex] = useState(null); // State to store the index of the selected bar
//   const [selectedMonth, setSelectedMonth] = useState(null); // State to store the selected month
//   const handleVisibleModal = () => {
//     setShowModel(!showModel);
//   };
//   const handleTotalOrdersClick = () => {
//     setShowModel(true);
//   };
//   console.log(piechart);
//   useEffect(() => {
//     handleAnalytics();
//     // Set the default selected month to the current month
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentMonthFormatted = `${currentDate.getFullYear()}-${
//       currentMonth < 9 ? '0' : ''
//     }${currentMonth + 1}`;
//     setSelectedMonth(currentMonthFormatted);
//     // Filter the orderData based on the selected month
//     const filteredOrderData = {};
//     Object.keys(orderData).forEach(month => {
//       if (month === currentMonthFormatted) {
//         filteredOrderData[month] = orderData[month];
//       }
//     });
//     handleOrders(filteredOrderData);
//     // Find the index of the selected bar for the default month
//     const selectedBarIndex = rentalData.findIndex(
//       data => data.month === monthNames[currentMonth],
//     );
//     setSelectedBarIndex(selectedBarIndex);
//   }, []);
//   const rentalData = monthNames.map(month => ({
//     month: month,
//     totalEarnings: 0,
//     totalNumberOfItems: 0,
//   }));
//   Object.keys(Data).forEach(key => {
//     const monthData = Data[key];
//     const month = new Date(key).getMonth();
//     rentalData[month] = {
//       month: monthNames[month],
//       totalEarnings: monthData.totalEarnings,
//       totalNumberOfItems: monthData.totalNumberOfItems,
//       orders: monthData.orders,
//     };
//   });
//   // Function to handle bar click event
//   const handleBarClick = (event, barData) => {
//     const selectedMonth = barData.datum.month;
//     const selectedMonthIndex = monthNames.indexOf(selectedMonth) + 1; // Adding 1 to match the month index (1-12)
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const formattedMonth =
//       selectedMonthIndex < 10
//         ? `0${selectedMonthIndex}`
//         : `${selectedMonthIndex}`;
//     const formattedDate = `${currentYear}-${formattedMonth}`;
//     const selectedMonthFormatted = formattedDate;
//     const selectedData = rentalData.find(data => data.month === selectedMonth);
//     const selectedBarIndex = rentalData.findIndex(
//       data => data.month === selectedMonth,
//     );
//     setSelectedMonth(selectedMonthFormatted);
//     setSelectedBarIndex(selectedBarIndex);
//     // Filter the orderData based on the selected month
//     const filteredOrderData = {};
//     Object.keys(orderData).forEach(month => {
//       if (month === selectedMonthFormatted) {
//         filteredOrderData[month] = orderData[month];
//       }
//     });
//     handleOrders(filteredOrderData);
//   };
//   // Function to dynamically assign colors to bars
//   const getBarColor = ({datum, index}) => {
//     const month = monthNames.indexOf(datum.month);
//     const colors = [
//       'red',
//       'blue',
//       'green',
//       'orange',
//       'purple',
//       'pink',
//       'yellow',
//       'gray',
//       'brown',
//       'cyan',
//       'magenta',
//       'teal',
//     ];
//     return selectedBarIndex === index ? Colors.buttonColor : 'grey';
//   };
//   return (
//     <View style={{flex: 1, backgroundColor: Colors.white}}>
//       {loading ? (
//         <View>
//           <Text style={{fontSize: 15, color: Colors.black}}>
//             items are loading
//           </Text>
//           {/* <Lottie
//             source={require('../../../assets/analyticstwo.json')}
//             autoPlay
//             style={{
//               height: 300,
//               width: 300,
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: 10,
//               marginTop: 100,
//             }}
//           /> */}
//         </View>
//       ) : (
//         <ScrollView style={{backgroundColor: Colors.white, flex: 1}}>
//           <>
//             <View style={{flexDirection: 'row'}}>
//               <BackButton />
//               <Text
//                 style={{
//                   color: 'black',
//                   fontFamily: 'Poppins-SemiBold',
//                   fontSize: 25,
//                   marginTop: 26,
//                   marginLeft: 70,
//                   alignSelf: 'center',
//                 }}>
//                 Analytics
//               </Text>
//             </View>
//             <VictoryChart width={400} height={300}>
//               <VictoryBar
//                 data={rentalData}
//                 x="month"
//                 y="totalNumberOfItems"
//                 barWidth={25}
//                 style={{
//                   data: {
//                     fill: getBarColor,
//                   },
//                 }}
//                 labels={({datum}) => `${datum.totalNumberOfItems}`}
//                 events={[
//                   {
//                     target: 'data',
//                     eventHandlers: {
//                       onPress: handleBarClick, // Handle click event on bars
//                     },
//                   },
//                 ]}
//               />
//             </VictoryChart>
//             {selectedBarIndex !== null && (
//               <>
//                 <View style={{flexDirection: 'row'}}>
//                   <View
//                     style={{
//                       width: 131,
//                       height: 96,
//                       marginLeft: 38,
//                       marginTop: 30,
//                       borderRadius: 20,
//                       backgroundColor: 'rgba(217, 217, 217, 0.3)',
//                     }}>
//                     <Text
//                       style={{
//                         color: 'black',
//                         fontFamily: 'Poppins-SemiBold',
//                         fontSize: 12,
//                         justifyContent: 'center',
//                         alignSelf: 'center',
//                         marginTop: 20,
//                       }}>
//                       ₹ {rentalData[selectedBarIndex].totalEarnings}
//                     </Text>
//                     <Text
//                       style={{
//                         color: 'black',
//                         fontFamily: 'Poppins-SemiBold',
//                         fontSize: 12,
//                         alignSelf: 'center',
//                         marginTop: 20,
//                       }}>
//                       Total Earnings
//                     </Text>
//                   </View>
//                   <TouchableOpacity
//                     onPress={handleTotalOrdersClick}
//                     style={{
//                       width: 131,
//                       height: 96,
//                       marginLeft: 38,
//                       marginTop: 30,
//                       borderRadius: 20,
//                       backgroundColor: 'rgba(217, 217, 217, 0.3)',
//                     }}>
//                     <Text
//                       style={{
//                         color: 'black',
//                         fontFamily: 'Poppins-SemiBold',
//                         fontSize: 12,
//                         justifyContent: 'center',
//                         alignSelf: 'center',
//                         marginTop: 20,
//                       }}>
//                       {rentalData[selectedBarIndex].totalNumberOfItems}
//                     </Text>
//                     <Text
//                       style={{
//                         color: 'black',
//                         fontFamily: 'Poppins-SemiBold',
//                         fontSize: 12,
//                         alignSelf: 'center',
//                         marginTop: 20,
//                       }}>
//                       Total Orders
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//                 {console.log(selectedMonth)}
//                 <View
//                   style={{
//                     marginTop: 20,
//                     height: '100%',
//                     width: '100%',
//                   }}>
//                   {orderData &&
//                   Object.keys(orderData).length > 0 &&
//                   orderData[selectedMonth] ? (
//                     <Modal visible={showModel}>
//                       <TouchableOpacity onPress={handleVisibleModal}>
//                         <Text style={style.txtClose}>Close</Text>
//                       </TouchableOpacity>
//                       <ScrollView
//                         style={{
//                           backgroundColor: Colors.white,
//                           width: '100%',
//                           height: '100%',
//                         }}>
//                         {orderData[selectedMonth].map(order => (
//                           <View key={order.id} style={style.dashcard}>
//                             <View style={style.dashcardContainer}>
//                               <Image
//                                 source={{uri: order.imageUrl}}
//                                 style={style.dashboardimage}
//                               />
//                               <View key={order.id} style={{marginTop: 0}}>
//                                 <Text style={style.Order}>
//                                   Order ID: {order.id}
//                                 </Text>
//                                 <Text style={style.Product}>
//                                   {order.product.name}
//                                 </Text>
//                                 <Text style={style.price}>{order.price}</Text>
//                                 <Text style={style.order}>{order.status}</Text>
//                               </View>
//                             </View>
//                           </View>
//                         ))}
//                       </ScrollView>
//                     </Modal>
//                   ) : (
//                     <Text style={{color: 'black'}}>
//                       No orders found for the selected month
//                     </Text>
//                   )}
//                 </View>
//               </>
//             )}
//           </>
//         </ScrollView>
//       )}
//     </View>
//   );
// };
// export default DashboardDetails;
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import {
  VictoryChart,
  VictoryBar,
  VictoryPie,
  VictoryLabel,
  VictoryAxis,
} from 'victory-native';
import {PieChart, LineChart} from 'react-native-chart-kit';

import Colors from '../../constants/Colors';
import useAnalytics from '../AnalyticsPage/useAnalytics';
import style from '../OwnerHomepage/OwnerHomestyle';
import BackButton from '../../components/atoms/BackButton/BackButton';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import HeadingText from '../../components/atoms/HeadingText/HeadingTest';
import AnalyticsDropdown from '../../components/atoms/AnalyticsDropdown/AnalyticsDropdown';
import {ColorSchemeContext} from '../../../ColorSchemeContext';
import Styles from '../../constants/themeColors';
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DashboardDetails = () => {
  const {
    handleAnalytics,
    Data,
    handleOrders,
    orderData,
    loading,
    piechart,
    HandlePiechart,
    handleExportpdf,
    CategoriePieData,
  } = useAnalytics();
  const {colorScheme} = useContext(ColorSchemeContext);
  const [showModel, setShowModel] = useState(false);
  const [selectedBarIndex, setSelectedBarIndex] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [monthtitle, setmonthtitle] = useState(
    monthNames[new Date().getMonth()],
  );
  const [selectedData, setSelectedData] = useState('quantity'); // Selected data for the bar graph
  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

  const handleDataSelect = data => {
    setSelectedData(data);
  };
  console.log('orderData:', orderData);
  const handleVisibleModal = () => {
    setShowModel(!showModel);
  };

  const handleTotalOrdersClick = () => {
    setShowModel(true);
  };

  useEffect(() => {
    handleAnalytics();
    HandlePiechart();
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentMonthFormatted = `${currentDate.getFullYear()}-${(
      currentMonth + 1
    )
      .toString()
      .padStart(2, '0')}`;
    setSelectedMonth(currentMonthFormatted);

    const filteredOrderData = {};
    Object.keys(orderData).forEach(month => {
      if (month === currentMonthFormatted) {
        filteredOrderData[month] = orderData[month];
      }
    });
    handleOrders(filteredOrderData);

    const selectedBarIndex = rentalData.findIndex(
      data => data.month === monthNames[currentMonth],
    );
    setSelectedBarIndex(selectedBarIndex);
  }, []);

  const rentalData = monthNames.map(month => ({
    month: month,
    totalEarnings: 0,
    totalNumberOfItems: 0,
  }));

  Object.keys(Data).forEach(key => {
    const monthData = Data[key];
    const month = new Date(key).getMonth();
    rentalData[month] = {
      month: monthNames[month],
      totalEarnings: monthData.totalEarnings,
      totalNumberOfItems: monthData.totalNumberOfItems,
      orders: monthData.orders,
    };
  });

  const handleBarClick = (event, barData) => {
    const selectedMonth = barData.datum.month;
    const selectedMonthIndex = monthNames.indexOf(selectedMonth) + 1;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const formattedMonth = selectedMonthIndex.toString().padStart(2, '0');
    const formattedDate = `${currentYear}-${formattedMonth}`;
    const selectedMonthFormatted = formattedDate;
    setmonthtitle(selectedMonth);
    const selectedData = rentalData.find(data => data.month === selectedMonth);
    const selectedBarIndex = rentalData.findIndex(
      data => data.month === selectedMonth,
    );
    setSelectedMonth(selectedMonthFormatted);
    setSelectedBarIndex(selectedBarIndex);
    const {size, rentalPrice} = barData;
    const filteredOrderData = {};
    Object.keys(orderData).forEach(month => {
      if (month === selectedMonthFormatted) {
        filteredOrderData[month] = orderData[month];
      }
    });
    handleOrders(filteredOrderData);
  };

  // const getBarColor = ({datum, index}) => {
  //   return selectedBarIndex === index ? Colors.buttonColor : 'grey';
  // };
  const getBarColor = ({datum, index}) => {
    const selectedValue =
      selectedData === 'quantity' ? 'totalNumberOfItems' : 'totalEarnings';
    return selectedBarIndex === index ? Colors.buttonColor : 'grey';
  };

  // const pieChartData =
  //   piechart && piechart[selectedMonth] ? piechart[selectedMonth] : {};
  const pieChartData =
    piechart && piechart[selectedMonth] ? piechart[selectedMonth] : {};

  // const getRandomColor = () => {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };
  const chartColors = [
    '#594AB5',
    '#E28B5E',
    '#7CB9E8',
    '#B5E8A1',
    '#F1C5D4',
    '#F5D96C',
    '#B6A2D3',
    '#7F8FA6',
    '#E8DAEF',
    '#D2B4DE',
  ];

  // Transform the data for the pie chart
  const transformedData = Object.entries(pieChartData).map(
    ([subcategory, {totalOrders}], index) => ({
      name: subcategory,
      value: totalOrders,
      color: chartColors[index % chartColors.length],
      // Generate a random color for each data point
    }),
  );

  console.log(transformedData);

  // const transformedData = Object.entries(pieChartData).map(
  //   ([subcategory, {totalOrders}]) => ({
  //     x: subcategory,
  //     y: totalOrders,
  //   }),
  // );
  console.log('pieChartData is ', pieChartData);

  return (
    <View style={[{flex: 1, backgroundColor: Colors.white}]}>
      {loading ? (
        <View>
          <Lottie
            source={require('../../../assets/analyticstwo.json')}
            autoPlay
            style={[
              {
                height: 300,
                width: 300,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
                marginTop: 100,
              },
            ]}
          />
        </View>
      ) : (
        <ScrollView style={{backgroundColor: '#ECF2FF', flex: 1}}>
          <>
            {/* <HeadingText message={'Analytics'} /> */}
            <View style={{flexDirection: 'row'}}>
              <BackButton />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 25,
                  marginTop: 20,
                  marginLeft: 70,
                  alignSelf: 'center',
                }}>
                Analytics
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 17,
                  marginTop: 23,
                  marginLeft: 50,
                  // alignSelf: 'center',
                }}>
                {monthtitle}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <AnalyticsDropdown onSelect={handleDataSelect} />
              </View>
            </View>
            <View style={{marginLeft: 10}}>
              <VictoryChart width={Dimensions.get('window').width} height={300}>
                <VictoryAxis
                  tickFormat={monthNames}
                  style={{
                    axis: {stroke: 'black'},
                    axisLabel: {fontSize: 14, padding: 30},
                    tickLabels: {fontSize: 12, padding: 5},
                  }}
                  label="Month"
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={value =>
                    selectedData === 'quantity'
                      ? `${value}`
                      : `${value / 1000}k`
                  }
                  style={{
                    axis: {stroke: 'black'},
                    axisLabel: {fontSize: 14, padding: 30},
                    tickLabels: {fontSize: 12, padding: 5},
                  }}
                  label={
                    selectedData === 'quantity' ? 'Quantity' : 'Rental Amount'
                  }
                />
                <VictoryBar
                  data={rentalData}
                  x="month"
                  y={
                    selectedData === 'quantity'
                      ? 'totalNumberOfItems'
                      : 'totalEarnings'
                  }
                  barWidth={23}
                  style={{
                    data: {
                      fill: getBarColor,
                    },
                  }}
                  labels={({datum}) =>
                    selectedData === 'quantity'
                      ? `${datum.totalNumberOfItems}`
                      : `${Math.round(datum.totalEarnings / 1000)}k`
                  }
                  events={[
                    {
                      target: 'data',
                      eventHandlers: {
                        onPress: handleBarClick,
                      },
                    },
                  ]}
                />
              </VictoryChart>
            </View>
            {selectedBarIndex !== null && (
              <>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      width: 131,
                      height: 96,
                      marginLeft: 38,
                      marginTop: 30,
                      borderRadius: 20,
                      backgroundColor: 'white',
                      elevation: 4,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 12,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      ₹ {rentalData[selectedBarIndex].totalEarnings}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 12,
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      Total Earnings
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={handleTotalOrdersClick}
                    style={{
                      width: 131,
                      height: 96,
                      marginLeft: 38,
                      marginTop: 30,
                      borderRadius: 20,
                      backgroundColor: 'white',
                      elevation: 4,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 12,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      {rentalData[selectedBarIndex].totalNumberOfItems}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 12,
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      Total Orders
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <View
                  style={{
                    // flex: 1,
                    height: '100%',
                    width: '100%',
                    // backgroundColor: Colors.black,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}> */}
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 20,
                      marginBottom: 10,
                      marginTop: 30,
                    }}>
                    Sub-categories
                  </Text>
                  <View
                    style={{
                      elevation: 4,
                      shadowColor: 'white',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.2,
                      shadowRadius: 4,
                    }}>
                    <PieChart
                      data={transformedData}
                      width={Dimensions.get('window').width}
                      height={210}
                      chartConfig={{
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        // Decrease the font size here
                      }}
                      accessor="value"
                      backgroundColor="transparent"
                      absolute
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      color: 'black',
                      fontSize: 20,
                      marginTop: 20,
                    }}>
                    {' '}
                    Rental Earnings{' '}
                  </Text>
                  <LineChart
                    data={{
                      labels: rentalData.map(data => data.month),
                      datasets: [
                        {
                          data: rentalData.map(data => data.totalEarnings),
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width}
                    height={220}
                    style={{
                      marginLeft: -10,
                      marginTop: 20,
                    }}
                    withHorizontalLabels={true}
                    chartConfig={{
                      backgroundGradientFrom: 'rgba(255, 255, 255, 0)', // Transparent background start color
                      backgroundGradientTo: 'rgba(255, 255, 255, 0)', // Transparent background end color
                      decimalPlaces: 0,
                      color: (opacity = 1) => `rgba(89, 74, 181, ${opacity})`,
                    }}
                    fromZero
                    yAxisInterval={10}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={style.exportContainer}
                    onPress={handleExportpdf}>
                    <Text style={style.exportText}>Export</Text>
                    <Icon
                      name="export"
                      size={15}
                      color={Colors.white}
                      style={{marginLeft: 10}}
                    />
                  </TouchableOpacity>
                </View>
                {/* </View> */}
                <View
                  style={{
                    marginTop: 20,
                    height: '100%',
                    width: '100%',
                  }}>
                  {orderData &&
                  Object.keys(orderData).length > 0 &&
                  orderData[selectedMonth] ? (
                    <Modal visible={showModel}>
                      <TouchableOpacity onPress={handleVisibleModal}>
                        <Text style={style.txtClose}>Close</Text>
                      </TouchableOpacity>
                      <ScrollView
                        style={{
                          backgroundColor: Colors.white,
                          width: '100%',
                          height: '100%',
                        }}>
                        {orderData[selectedMonth].map((order, index) => (
                          <View
                            key={`${order.id}-${index}`}
                            style={style.dashcard}>
                            <View style={style.dashcardContainer}>
                              <Image
                                source={{uri: order.imageUrl}}
                                style={style.dashboardimage}
                              />
                              <View
                                key={order.id}
                                style={{
                                  marginTop: 0,
                                  width: 200,
                                  height: 40,
                                  // backgroundColor: Colors.white,
                                }}>
                                <Text style={style.Order}>
                                  Order ID: {order.borrowerId}
                                </Text>
                                {/* <Text>Rented by</Text> */}
                                <Text style={style.borrowerName}>
                                  {order.borrowerName}
                                </Text>
                                {/* <Text style={style.Product}></Text> */}
                                <Text style={style.price}>
                                  ₹ {order.rentalCost}
                                </Text>
                                <Text style={style.order}> {order.name}</Text>
                                <Text style={style.order}>
                                  {' '}
                                  {order.borrowerPhoneNumber}
                                </Text>
                              </View>
                            </View>
                          </View>
                        ))}
                      </ScrollView>
                    </Modal>
                  ) : (
                    <Text style={{color: 'black'}}>
                      No orders found for the selected month
                    </Text>
                  )}
                </View>
              </>
            )}
          </>
        </ScrollView>
      )}
    </View>
  );
};

export default DashboardDetails;
