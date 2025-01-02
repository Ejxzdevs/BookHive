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


function App() {
  const [role , setRole] = useState(null);
  
  return (
    <Box>
       {role === null ? (
         <Navigation /> 
      ) : (
        <div>  </div>
      )}
      <Box>
        <Routes>
          <Route path="/" element={<EnduserHome />} />
          <Route path="/About" element={<EnduserAbout />} />
          <Route path="/Contact" element={<EnduserContact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
      {role === null ? (
           <Footer/>
      ) : (
        <div>  </div>
      )}
    </Box>
  );
}

export default App;
