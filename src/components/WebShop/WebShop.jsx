import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Navigation from './Routes/Navigation/Navigation';
import SignIn from './Routes/SignIn/SignIn';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const WebShop = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default WebShop;
