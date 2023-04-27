import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUserProducts} from '../../redux/slice/userProductSlice';
function useHome() {
  useEffect(() => {
    dispatch(fetchUserProducts());
  }, []);

  const dispatch = useDispatch();
  const WishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log(JSON.stringify(WishlistProducts));
  return {WishlistProducts};
}
export default useHome;
