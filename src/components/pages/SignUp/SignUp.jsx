import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import TopLines from '../../UI/TopLines';
import Checkbox from '../../UI/Checkbox';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';
const SignUp = () => {
  return (
    <section className="relative m-auto max-w-screen max-h-screen overflow-hidden ">
      <TopLines right="-right-9" />
      <div className="flex">
        {/* LeftSide */}
        <div className="w-[50%] h-screen flex items-center justify-center">
          <div className="h-[95%]">
            <img src="/SignUp.png" alt="SignUp" className="w-full h-full" />
          </div>
        </div>
        {/* RightSide */}
        <div className="w-[50%] pt-10">
          <div className="flex flex-col gap-3">
            <div className="w-[10rem] h-[2rem] object-contain">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="font-bold text-4xl">Create an account</h1>
            <p className="font-bold text-grey">
              Describe yourself clearly to avoid any mistake
            </p>
          </div>
          <div className="grid gap-6 pt-16 w-80 text-sm">
            <div className="flex gap-7">
              <TextField placeholder="First Name" />
              <TextField placeholder="Second Name" />
            </div>
            <TextField placeholder="Enter Your Gmail" />
            <TextField placeholder="Enter Your Password" />
            <Checkbox label="I understand and agree to Postdost Terms and conditions" />
            <Button>Create Account</Button>
            <p className="text-center">Already have an account? Sign in</p>
            <div className="text-center">
              <div className='flex justify-center items-center gap-2'>
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
      </div>
    </section>
  );
};

export default SignUp;
