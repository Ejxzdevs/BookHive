import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashboard';
import Product from './pages/product';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="flex flex-row" sx={{ padding: 0, margin: 0 }}>
      <Sidebar /> 
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
