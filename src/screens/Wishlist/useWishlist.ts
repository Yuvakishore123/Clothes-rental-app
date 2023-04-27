// import { useSelector, useDispatch } from 'react-redux';
// import { addItemToCart, removeFromCart, removeFromWishlist } from '../../redux/actions/actions';

// export const useWishlist = () => {
//   const cartData = useSelector(state => state.WishlistReducer);
//   const dispatch = useDispatch();

//   const handleRemoveFromWishlist = (index) => {
//     dispatch(removeFromWishlist(index));
//   };

//   const handleAddToCart = (x) => {
//     dispatch(addItemToCart(x));
//   };

//   return { cartData, handleRemoveFromWishlist, handleAddToCart };
// };


import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWishlistProducts} from '../../redux/slice/wishlistSlice';
function useWishlist() {
  useEffect(() => {
    dispatch(fetchWishlistProducts());
  }, []);

  const dispatch = useDispatch();
  const WishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log(JSON.stringify(WishlistProducts));
   console.log("wishlist succes")
  return {WishlistProducts};
 
}
export default useWishlist;
