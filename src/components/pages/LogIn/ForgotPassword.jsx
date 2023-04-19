import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import TopLines from '../../UI/TopLines';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';
const ForgotPassword = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility((visible) => !visible);
  };
  return (
    <section className="relative m-auto max-w-screen max-h-screen overflow-hidden ">
      <TopLines flip="-scale-x-100" />
      <div className="flex">
        {/* LeftSide */}
        <div className="w-[50%] h-screen pt-10 flex flex-col pl-40 justify-center">
          <div className="flex flex-col gap-3">
            <div className="w-[10rem] h-[2rem] object-contain">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="font-bold text-4xl">Be at Ease!</h1>
            <p className="font-bold text-grey">
              Forgot your Password with Email!
            </p>
          </div>
          <div className="grid gap-6 pt-16 w-80 text-sm">
            <TextField
              placeholder="Enter Your Gmail"
              type="email"
              id="gmail"
              name="gmail"
            />
            <Button>Forgot Password</Button>
          </div>
        </div>
        {/* Show this when Their Email is verified via optp or verifying by mail, show the hidden in the end to flex!*/}
        <div className="w-[50%] h-screen pt-10 flex-col pl-40 justify-center hidden">
          <div className="flex flex-col gap-3">
            <div className="w-[10rem] h-[2rem] object-contain">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="font-bold text-4xl">Be Secure!</h1>
            <p className="font-bold text-grey">Set Your New Password</p>
          </div>
          <div className="grid gap-6 pt-16 w-80 text-sm">
            <div className="relative">
              <TextField
                placeholder="New Password"
                type={passwordVisibility ? 'text' : 'password'}
                style={{ width: '25rem' }}
                id="password"
                name="password"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute right-5 top-3 text-grey text-xl"
              >
                {passwordVisibility ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            <div className="relative">
              <TextField
                placeholder="Re-Enter Password"
                type={passwordVisibility ? 'text' : 'password'}
                style={{ width: '25rem' }}
                id="password"
                name="password"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute right-5 top-3 text-grey text-xl"
              >
                {passwordVisibility ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            <Button>Submit</Button>
          </div>
        </div>
        {/* LeftSide */}
        <div className="w-[50%] h-screen flex items-center justify-center">
          <div className="h-[95%]">
            <img src="/LogIn.png" alt="SignUp" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
