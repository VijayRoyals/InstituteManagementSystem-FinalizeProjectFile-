import React from 'react';
import { Outlet } from 'react-router-dom';
import FacultySideNav from './FacultySideNav';

const FacSideNavLayout = () => {
  return (
    <div className="d-flex">
      <div className="col-auto bg-dark">
        <FacultySideNav/>
      </div>
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default FacSideNavLayout;