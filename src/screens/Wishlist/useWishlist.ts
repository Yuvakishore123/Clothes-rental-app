import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeFromCart, removeFromWishlist } from '../../redux/actions/actions';

export const useWishlist = () => {
  const cartData = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (index) => {
    dispatch(removeFromWishlist(index));
  };

  const handleAddToCart = (x) => {
    dispatch(addItemToCart(x));
  };

  return { cartData, handleRemoveFromWishlist, handleAddToCart };
};
