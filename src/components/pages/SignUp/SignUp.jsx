import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import TopLines from '../../UI/TopLines';
import Checkbox from '../../UI/SignUpCheckbox';
import TextField from '../../UI/TextField';
import Button from '../../UI/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
  //One UpperCase letter, one lower case letter, one number
  const signupSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, 'Must be atleast 3 characters')
      .max(10, 'Max of 8 characters allowed')
      .required('Required'),
    secondName: yup
      .string()
      .min(3, 'Must be atleast 3 characters')
      .max(10, 'Max of 8 characters allowed'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Required'),
    password: yup
      .string()
      .min(8, 'Must be atleast 8 characters')
      .matches(passwordRegex, { message: 'Please create a Strong Password' })
      .required('Required'),
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref('password'), null], 'Passwords must match!')
    //   .required('Required'),
    agreement: yup
      .boolean()
      .oneOf([true], 'Please accept term and Conditions')
      .required('Required'),
  });
  const initialValues = {
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    agreement: false,
  };
  const onSubmit = async (values, actions) => {
    const { firstName, secondName, email, password, agreement } = values;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    axios
      .post('http://localhost:8000/user/signup', {
        firstName,
        secondName,
        email,
        password,
        agreement,
      })
      .then((response) => {
        Cookies.set('token', response.data.token, { expires: 7 });
        response.status === 201 && navigate('/');
      })
      .catch((error) => console.log(error));
  };
  const googleAuth = () => {
    window.open(`${REACT_APP_API_URL}/auth/google/callback`, '_self');
  };
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit,
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility((visible) => !visible);
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
              className="grid pt-16 w-fit text-sm"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              {touched.firstName && errors.firstName && (
                <p className="text-red">{errors.firstName}</p>
              )}
              <div className="flex gap-12 min-w-[25rem] mb-4">
                <TextField
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={errors.firstName && touched.firstName}
                  style={{ width: '11.5rem' }}
                />
                {errors.secondName && touched.secondName && (
                  <p className="text-red">{errors.secondName}</p>
                )}
                <TextField
                  placeholder="Second Name"
                  type="text"
                  id="secondName"
                  name="secondName"
                  value={values.secondName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={errors.secondName && touched.secondName}
                  style={{ width: '11.5rem' }}
                />
              </div>
              {errors.email && touched.email && (
                <p className="text-red">{errors.email}</p>
              )}
              <TextField
                placeholder="Enter Your email"
                id="email"
                name="email"
                text="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isError={touched.email && errors.email}
                style={{ marginBottom: '1rem' }}
              />
              {errors.password && touched.password && (
                <p className="text-red">{errors.password}</p>
              )}
              <div className="relative">
                <TextField
                  placeholder="Enter Your Password"
                  type={passwordVisibility ? 'text' : 'password'}
                  style={{ width: '26rem', marginBottom: '1rem' }}
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={touched.password && errors.password}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-5 top-3 text-grey text-xl"
                >
                  {passwordVisibility ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
              {touched.agreement && errors.agreement && (
                <p className="text-red">{errors.agreement}</p>
              )}
              <Checkbox
                label="I understand and agree to Postdost Terms and conditions"
                id="agreement"
                name="agreement"
                value={values.agreement}
                onChange={handleChange}
                onBlur={handleBlur}
                isError={touched.agreement && errors.agreement}
              />
              <Button type="submit" disabled={isSubmitting}>
                Create Account
              </Button>
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
                onClick={googleAuth}
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
