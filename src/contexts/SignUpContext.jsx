import React, { createContext, useState } from 'react';

export const SignUpContext = createContext();

const SignUpProvider = (props) => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreement, setArregment] = useState([]);
  return (
    <SignUpContext.Provider
      value={{
        firstName,
        setFirstName,
        setSecondName,
        secondName,
        email,
        setEmail,
        password,
        setPassword,
        agreement,
        setArregment,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpProvider;
