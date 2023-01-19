import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as WebShopLogo } from '../../../../assets/Logo.svg';
import { signOutUser } from '../../../../utils/Firebase/Firebase.utils';
import { UserContext } from '../../../contexts/User.context';

import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
