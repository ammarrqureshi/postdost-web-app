import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import TopLines from '../../UI/TopLines';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';
const LogIn = () => {
  return (
    <section className="relative m-auto max-w-screen max-h-screen overflow-hidden ">
      <TopLines  />
      <div className="flex">
        {/* LeftSide */}
        <div className="w-[50%] h-screen pt-10 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3">
            <div className="w-[10rem] h-[2rem] object-contain">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="font-bold text-4xl">Welcome Back!</h1>
            <p className="font-bold text-grey">
              Provide your login credentials
            </p>
          </div>
          <div className="grid gap-6 pt-16 w-80 text-sm">
            <TextField placeholder="Enter Your Gmail" />
            <TextField placeholder="Enter Your Password" />
            <p className="font-medium text-black">Forgot Passowrd?</p>
            <Button>Signin</Button>
            <p className="text-center">Dont' have account?Sign up</p>
            <div className="text-center">
              <div className="flex justify-center items-center gap-2">
                <hr className="h-[2px] bg-lightGrey w-[9rem]" />
                Or
                <hr className="h-[2px] bg-lightGrey w-[9rem]" />
              </div>
            </div>
            <div>
              <Button
                className="relative"
                style={{
                  width: '25rem',
                  backgroundColor: 'transparent',
                  color: 'var(--black)',
                  border: '1px solid var(--black)',
                }}
              >
                <FaGoogle className="absolute top-4 left-4" />
                Continue with Google Account
              </Button>
            </div>
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

export default LogIn;
