import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUserProducts} from '../../redux/slice/userProductSlice';
function useHome() {
  useEffect(() => {
    dispatch(fetchUserProducts());
  }, []);

  const dispatch = useDispatch();
  const UserProducts = useSelector(state => state.UserProducts.data);
  console.log(JSON.stringify(UserProducts));
  return {UserProducts};
}
export default useHome;
