import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as WebShopLogo } from '../../../../assets/Logo.svg';
import { selectCurrentUser } from '../../../../store/user/user.selector';
import { signOutUser } from '../../../../utils/Firebase/Firebase.utils';
import CartDropdown from '../../CartDropdown/CartDropdown';
import CartIcon from '../../CartIcon/CartIcon';
import { CartContext } from '../../contexts/Cart.context';
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
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
