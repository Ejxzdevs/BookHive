import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import EnduserHome from './pages/EnduserHome';
import EnduserAbout from './pages/EnduserAbout';
import Navigation from "./components/Navigation";


function App() {
  return (
    <Box className="flex flex-col" sx={{ padding: 0, margin: 0 }}>
      <Navigation/>
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<EnduserHome />} />
          <Route path="/About" element={<EnduserAbout />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
