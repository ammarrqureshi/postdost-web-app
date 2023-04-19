import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignUpContext } from '../../../contexts/SignUpContext';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import TopLines from '../../UI/TopLines';
import Checkbox from '../../UI/Checkbox';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';
const SignUp = () => {
  const {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    email,
    setEmail,
    password,
    setPassword,
    agreement,
    setAgreement,
  } = useContext(SignUpContext);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility((visible) => !visible);
  };
  console.log(firstName, secondName, email, password, agreement);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.values);
  };

  return (
    <section className="relative m-auto max-w-screen max-h-screen overflow-hidden ">
      <TopLines right="-right-9" />
      <div className="flex">
        {/* LeftSide */}
        <div className="w-[50%] h-screen flex items-center justify-center">
          <div className="h-[95%] ">
            <img src="/SignUp.png" alt="SignUp" className="w-full h-full" />
          </div>
        </div>
        {/* RightSide */}
        <div className="w-[50%] pt-10">
          <div className="flex flex-col gap-3">
            <div className="w-40 h-8 object-contain">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="font-bold text-4xl">Create an account</h1>
            <p className="font-bold text-grey">
              Describe yourself clearly to avoid any mistake
            </p>
          </div>
          <div className="grid gap-6 w-[25rem] text-sm ">
            <form
              action="/signin"
              method="post"
              className="grid gap-6 pt-16 w-fit text-sm"
              onSubmit={handleFormSubmit}
            >
              <div className="flex gap-12  min-w-[25rem]">
                <TextField
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ width: '11.5rem' }}
                />
                <TextField
                  placeholder="Second Name"
                  type="text"
                  id="secondName"
                  name="secondName"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                  style={{ width: '11.5rem' }}
                />
              </div>
              <TextField
                placeholder="Enter Your Gmail"
                id="gmail"
                name="gmail"
                text="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <TextField
                  placeholder="Enter Your Password"
                  type={passwordVisibility ? 'text' : 'password'}
                  style={{ width: '26rem' }}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-5 top-3 text-grey text-xl"
                >
                  {passwordVisibility ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
              <Checkbox
                label="I understand and agree to Postdost Terms and conditions"
                id="Agreement"
                name="Agreement"
                value="Agree"
                setValue={setAgreement}
                checked={false}
              />
              <Button type="submit">Create Account</Button>
            </form>
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login">
                <span className="font-bold">LogIn</span>
              </Link>
            </p>
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
                  width: '26rem',
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
