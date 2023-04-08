import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../../assets/ShoppingBag.svg';
import { setIsCartOpen } from '../../../store/cart/cart.action';
import { selectCartCount, selectIsCartOpen } from '../../../store/cart/cart.selector';
import { CartIconContainer, ItemCount } from './CartIcon.styles';

function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
export default CartIcon;
