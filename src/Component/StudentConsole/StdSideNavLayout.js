import React from 'react';
import { Outlet } from 'react-router-dom';
import StdSideNav from './StdSideNav';

const FacSideNavLayout = () => {
  return (
    <div className="d-flex">
      <div className="col-auto bg-dark">
        <StdSideNav/>
      </div>
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default FacSideNavLayout;