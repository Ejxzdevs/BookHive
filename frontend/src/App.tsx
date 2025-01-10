import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import EnduserHome from './pages/EnduserHome';
import EnduserAbout from './pages/EnduserAbout';
import EnduserContact from './pages/EnduserContact';
import EndUserBooks from './pages/EndUserBooks';
import Navigation from "./components/Navigation";
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Request from './pages/Request';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type Role = 'admin' | 'user';

function App() {
  const [role, setRole] = useState<Role>('user');
  const location = useLocation();  // Get the current location (path)

  useEffect(() => {
    const userRole = Cookies.get('userRole');
    setRole(userRole as Role || 'user');
  }, []);

  const isNotAdminPage = location.pathname !== '/admin';

  return (
    <Box>
      {role === 'user' && isNotAdminPage ? (
        <Navigation />
      ) : null}

      <Box>
        <Routes>
          <Route path="/" element={<EnduserHome />} />
          <Route path="/About" element={<EnduserAbout />} />
          <Route path="/books" element={<EndUserBooks />} />
          <Route path="/Contact" element={<EnduserContact />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Box>
      
      {role === 'user' && isNotAdminPage ? (
        <Footer />
      ) : null}
    </Box>
  );
}

export default App;
