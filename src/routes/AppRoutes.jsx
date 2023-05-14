import Sidebar from '../components/pages/Layout';
import Explore from '../components/pages/Explore';
import ContentManager from '../components/pages/ContentManager';
import Influencer from '../components/pages/Influencer/Influencer';
import SignUp from '../components/pages/SignUp';
import LogIn from '../components/pages/LogIn/LogIn';
import ForgotPassword from '../components/pages/LogIn/ForgotPassword';
import { Route, Routes, Navigate } from 'react-router-dom';
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/" element={<Navigate to="/explore" />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/influencer" element={<Influencer />} />
        <Route path="/contentmanager" element={<ContentManager />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
