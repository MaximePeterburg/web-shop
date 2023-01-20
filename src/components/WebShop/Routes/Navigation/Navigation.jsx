import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as WebShopLogo } from '../../../../assets/Logo.svg';
import { signOutUser } from '../../../../utils/Firebase/Firebase.utils';
import CartDropdown from '../../CartDropdown/CartDropdown';
import CartIcon from '../../CartIcon/CartIcon';
import { CartContext } from '../../contexts/Cart.context';
import { UserContext } from '../../contexts/User.context';
import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className='Navigation'>
        <Link className='Logo-container' to='/'>
          <WebShopLogo className='logo' />
        </Link>
        <div className='Nav-Links-container'>
          <Link className='Nav-Link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='Nav-Link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='Nav-Link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
