import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineAddBox } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
// import { Drawer } from 'antd';
//Internal Imports
import logo from '../../../assets/logo.png';
import Button from '../../UI/Button';
const Drawer = () => {
  return {
    /*  
        <Drawer
          className="drawer"
          placement="left"
          onClose={() => setShowSidebar(false)}
          open={showSidebar}
          closable={false}
          style={{ width: '296px' }}
        >
          <div className="flex flex-col items-center justify-center px-4 gap-8">
            <div className="w-[12rem]">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[5rem] h-[5rem] rounded">
                <img
                  src="/sidebar/dummyprofile.png"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="grid gap-2 place-items-center">
                <h1 className="font-bold text-3xl">Ehsan Ellahi</h1>
                <h5 className="font-medium text-grey">
                  ehsanellahiofficial@gmail.com
                </h5>
              </div>

              <Button style={{ margin: '2rem 0px' }}>Connect Account</Button>
              <div className="flex flex-col gap-5 text-xl text-grey">
                <Link to="/explore" className="flex gap-3 items-center">
                  <MdOutlineTravelExplore />
                  <h1>Explore</h1>
                </Link>
                <Link to="/explore" className="flex gap-3 items-center">
                  <MdOutlineTravelExplore />
                  <h1>Content Manager</h1>
                </Link>
                <Link to="/explore" className="flex gap-3 items-center">
                  <FiMessageCircle />
                  <h1>Messages</h1>
                </Link>
                <Link to="/explore" className="flex gap-3 items-center">
                  <IoSettingsOutline />
                  <h1>Settings</h1>
                </Link>
                <Link to="/login" className="flex gap-3 mt-6 items-center">
                  <CiLogout />
                  <h1>Log out</h1>
                </Link>
              </div>
            </div>
          </div>
        </Drawer>
       */
  };
};

export default Drawer;
