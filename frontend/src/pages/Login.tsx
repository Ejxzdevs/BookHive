import { Box, Typography, Button, TextField } from '@mui/material';
import LibraryImage from '../assets/Library.jpg';

const Login = () => {
  return (
    <Box 
      className="relative flex items-center justify-center h-[100vh] bg-cover bg-center" 
      sx={{
        backgroundImage: `url(${LibraryImage})`,
      }}
    >
      {/* Overlay to dim the background */}
      <Box
        className="absolute inset-0 bg-black opacity-50" // This creates the dimming effect
        sx={{
          zIndex: 1,
        }}
      />

      <form
        className="relative flex flex-col gap-5 border border-gray-500 h-auto w-[500px] bg-white opacity-90 rounded-md px-5 py-20 z-10"
      >
        <Box className="text-dark h-auto max-w-[800px]">
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '2rem', md: '3rem' },
            }}

            
            className='text-center'
          >
            Contact Us
          </Typography>
        </Box>
        <TextField
          id="email"
          label="Email"
          fullWidth
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <Button type="submit" variant="contained" fullWidth   sx={{ backgroundColor: '#19B37E' }} >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Login;
