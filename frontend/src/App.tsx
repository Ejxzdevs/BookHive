import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import EnduserHome from './pages/EnduserHome';
import EnduserAbout from './pages/EnduserAbout';
import EnduserContact from './pages/EnduserContact';
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import Login from './pages/login';
import { useState } from 'react';

type Role = 'admin' | 'user';

function App() {
  const [role, setRole] = useState<Role>('user');
  
  return (
    <Box>
      {role === 'user' && window.location.pathname !== '/admin' ? (
        <Navigation />
      ) : null}
      <Box>
        <Routes>
          <Route path="/" element={<EnduserHome />} />
          <Route path="/About" element={<EnduserAbout />} />
          <Route path="/Contact" element={<EnduserContact />} />
          {/* Admin login route */}
          <Route path="/admin" element={<Login />} />
        </Routes>
      </Box>
      {role === 'user' && window.location.pathname !== '/admin' ? (
        <Footer />
      ) : null}
    </Box>
  );
}

export default App;
