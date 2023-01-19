import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as WebShopLogo } from '../../../../assets/Logo.svg';
import './Navigation.scss';

const Navigation = () => {
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
          <Link className='Nav-Link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
