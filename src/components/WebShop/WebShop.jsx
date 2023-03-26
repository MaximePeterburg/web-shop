import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { checkUserSession } from '../../store/user/user.action';
import Authentication from './Routes/Authentication/Authentication';
import Checkout from './Routes/Checkout/Checkout';
import Home from './Routes/Home';
import Navigation from './Routes/Navigation/Navigation';
import Shop from './Routes/Shop/Shop';

const WebShop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default WebShop;
