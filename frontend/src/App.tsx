import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import EnduserHome from './pages/EnduserHome';
import EnduserAbout from './pages/EnduserAbout';
import EnduserContact from './pages/EnduserContact';
import Navigation from "./components/Navigation";
import Footer from './components/Footer';


function App() {
  return (
    <Box>
      <Navigation/>
      <Box>
        <Routes>
          <Route path="/" element={<EnduserHome />} />
          <Route path="/About" element={<EnduserAbout />} />
          <Route path="/Contact" element={<EnduserContact />} />
        </Routes>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
