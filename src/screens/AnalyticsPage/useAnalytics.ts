import {useState} from 'react';
import {
  AnalyticsUrl,
  exportPdf,
  getdashboard,
  pieChartUrl,
} from '../../constants/Apis';
import ApiService from '../../network/network';
import {encode} from 'base-64';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useAnalytics = () => {
  const [Data, setData] = useState('');
  const [orderData, setOrderdata] = useState([]);
  const [piechart, setPiechart] = useState([]);
  const [loading, setisLoading] = useState(false);
  const handleAnalytics = async () => {
    setisLoading(true);
    try {
      const result = await ApiService.get(AnalyticsUrl);
      console.log('result', result);
      setData(result);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(true);
    }
  };
  const handleOrders = async () => {
    const results = await ApiService.get(getdashboard);
    console.log('dashboardorders', results);
    setOrderdata(results);
  };
  const HandlePiechart = async () => {
    const resultData = await ApiService.get(pieChartUrl);
    console.log('pie Chart is ', resultData);
    setPiechart(resultData);
  };

  const handleExportpdf = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(
        'https://8d57-106-51-70-135.ngrok-free.app/api/v1/order/exportPdf',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('Response:', response);
      console.log('Response status:', response.status);
      console.log(
        'Response content type:',
        response.headers.get('content-type'),
      );

      const blob = await response.blob();

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result.replace(/^data:.+;base64,/, '');

        const filePath = `${RNFetchBlob.fs.dirs.DownloadDir}/file.pdf`;
        await RNFetchBlob.fs.writeFile(filePath, base64String, 'base64');
        console.log('File downloaded successfully:', filePath);
      };
      reader.onerror = error => {
        console.log('Error reading file:', error);
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.log('Error downloading file:', error);
    }
  };
  console.log('data of sunday', piechart);

  return {
    handleAnalytics,
    Data,
    handleOrders,
    orderData,
    loading,
    HandlePiechart,
    piechart,
    handleExportpdf,
  };
};

export default useAnalytics;
