import {useEffect, useState} from 'react';
import axios from 'axios';

const Useowneredititems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://e5b5-122-172-176-124.ngrok-free.app/api/v1/product/list')
      .then(response => {
        const mappedData = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
        }));
        setData(mappedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(data);

  return {data};
};

export default Useowneredititems;
