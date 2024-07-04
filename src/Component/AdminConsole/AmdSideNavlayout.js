import React from 'react';
import { Outlet } from 'react-router-dom';
import AdmSideNav from './AdmSideNav';

const AdmSideNavLayout = () => {
  return (
    <div className="d-flex">
      <div className="col-auto bg-dark">
        <AdmSideNav />
      </div>
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdmSideNavLayout;









