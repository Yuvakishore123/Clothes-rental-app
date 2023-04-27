import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartProducts} from '../../redux/slice/cartSlice';
function useCart() {
  useEffect(() => {
    dispatch(fetchCartProducts());
  }, []);

  const dispatch = useDispatch();
  const CartProducts = useSelector(state => state.CartProducts.data);
  console.log(JSON.stringify(CartProducts));
  console.log('cart succes');
  return {CartProducts};
}
export default useCart;
