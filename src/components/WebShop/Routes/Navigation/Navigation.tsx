import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as WebShopLogo } from '../../../../assets/Logo.svg';
import { selectIsCartOpen } from '../../../../store/cart/cart.selector';
import { signOutStart } from '../../../../store/user/user.action';
import { selectCurrentUser } from '../../../../store/user/user.selector';
import CartDropdown from '../../CartDropdown/CartDropdown';
import CartIcon from '../../CartIcon/CartIcon';
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <WebShopLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
