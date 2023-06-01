import SignUp from './SignUp'
import SignUpProvider from '../../../contexts/SignUpContext';
const index = () => {
  return (
    <SignUpProvider>
      <SignUp />
    </SignUpProvider>
  );
}

export default index