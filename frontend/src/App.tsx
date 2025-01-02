import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import EnduserHome from './pages/EnduserHome';
import EnduserAbout from './pages/EnduserAbout';
import EnduserContact from './pages/EnduserContact';
import Navigation from "./components/Navigation";
import Dashboard from './pages/dashboard';
import Footer from './components/Footer';
import Login from './pages/login';
import { useState , useEffect } from 'react';
import Cookies from 'js-cookie';

type Role = 'admin' | 'user';

function App() {
  const [role, setRole] = useState<Role>('user');
  useEffect(() => {
    const userRole = Cookies.get('userRole');
    setRole(userRole as Role || 'user');
  }, []);
  return (
    <Box>
      {role === 'user' ? (
        <Navigation />
      ) : null}
      <Box>
        <Routes>
          <Route path="/" element={<EnduserHome />} />
          <Route path="/About" element={<EnduserAbout />} />
          <Route path="/Contact" element={<EnduserContact />} />
          {/* Admin login route */}
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
      {role === 'user' ? (
        <Footer />
      ) : null}
    </Box>
  );
}

export default App;
