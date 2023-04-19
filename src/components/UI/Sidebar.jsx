import React from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineAddBox } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
const Sidebar = () => {
  return (
    <>
      <aside className="shadow-2xl max-w-[5rem] w-[5rem] flex flex-col items-center fixed h-[90vh] gap-14 mt-6">
        <div>
          <img src="/sidebar/logo.png" alt="Logo" />
        </div>
        <div className="w-12 h-12 relative">
          <img
            src="/sidebar/dummyprofile.png"
            alt=""
            className="w-full h-full rounded-full"
          />
          <div className="absolute bg-[#36BF06] bottom-0 right-10 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-7 text-3xl text-[#ababab]">
          <MdOutlineAddBox />
          <MdOutlineTravelExplore className="text-[#5E17EB]" />
          <MdOutlineTravelExplore />
          <FiMessageCircle />
          <IoSettingsOutline />
        </div>
        <div className="mt-8 text-[2rem] text-[#ababab]">
          <CiLogout />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
