import Explore from './components/pages/Explore';
import Influencer from './components/pages/Influencer/Influencer';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn/LogIn';
import ForgotPassword from './components/pages/LogIn/ForgotPassword';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="App">
        {/* Dummy Routes For Testing Links */}
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/influencer" element={<Influencer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
