import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import ProductProvider from 'providers/ProductProvider';
import React from 'react';
import ModalAuth from 'components/authentication/modal/ModalAuth';
import { ComboLayoutNavbarTop } from 'components/navbar/top/ComboLayoutNavbarTop';
import { Outlet } from 'react-router-dom';

const ComboNavLayout = () => {
  return (
    <div className="container">
      <NavbarVertical />
      <ProductProvider>
        <div className="content">
          <ComboLayoutNavbarTop />
          <Outlet />
        </div>
      </ProductProvider>
      <ModalAuth />
    </div>
  );
};

export default ComboNavLayout;
