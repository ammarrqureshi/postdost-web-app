import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineAddBox } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
const Sidebar = () => {
  return (
    <>
      <aside className="shadow-2xl max-w-[5rem] w-[5rem] flex flex-col items-center fixed h-screen gap-14">
        <div className="pt-7">
          <img src="/sidebar/logo.png" alt="Logo" />
        </div>
        <div className="w-14 h-14 relative">
          <img
            src="/sidebar/dummyprofile.png"
            alt=""
            className="w-full h-full rounded-full"
          />
          <div className="absolute bg-[#36BF06] bottom-1 right-0 rounded-full w-3 h-3 border-[#fff] border-2"></div>
        </div>
        <div className="flex flex-col gap-7 text-3xl text-grey ">
          <MdOutlineAddBox className="text-violet text-4xl" />
          <Link to="/explore">
            <MdOutlineTravelExplore />
          </Link>
          <Link to="/influencer">
            <MdOutlineTravelExplore />
          </Link>
          <FiMessageCircle />
          <IoSettingsOutline />
        </div>
        <div className="mt-8 text-[2rem] text-[#ababab]">
          <Link to="/login">
            <CiLogout />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
