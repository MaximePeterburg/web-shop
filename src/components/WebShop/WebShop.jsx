import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Routes/Authentication/Authentication';
import Home from './Routes/Home';
import Navigation from './Routes/Navigation/Navigation';
import Shop from './Routes/Shop/Shop';

const WebShop = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default WebShop;
