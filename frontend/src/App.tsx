import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navigation from "./components/Navigation";
import { Box } from '@mui/material';

// PAGES
import EnduserHome from './pages/EnduserHome';
import EnduserAbout from './pages/EnduserAbout';
import EnduserContact from './pages/EnduserContact';
import EndUserBooks from './pages/EndUserBooks';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Product from './pages/Product';
import Request from './pages/Request';
import Footer from './components/Footer';
import Login from './pages/Login';



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
          {/* END USER */}
          <Route path="/" element={<EnduserHome />} />
          <Route path="/About" element={<EnduserAbout />} />
          <Route path="/books" element={<EndUserBooks />} />
          <Route path="/Contact" element={<EnduserContact />} />
    
          {/* ADMIN PANEL */}
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/request" element={<Request />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Box>
      
      {role === 'user' && isNotAdminPage ? (
        <Footer />
      ) : null}
    </Box>
  );
}

export default App;
