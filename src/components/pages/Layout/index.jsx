import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../UI/Sidebar';
const index = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default index;
