import { Box, Typography, Button, TextField } from '@mui/material';
import LibraryImage from '../assets/Library.jpg';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginSchema, LoginFormData } from  '../utils/formSchema'
import { zodResolver } from '@hookform/resolvers/zod';
import { userLogin } from '../services/userApi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
   const navigate = useNavigate();
   const { register, handleSubmit, formState: { errors }, } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema),});
   const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
      console.log(data)
      const response = await userLogin({
              user_email: data.user_email,
              user_password: data.user_password,
      });
      console.log(response[0].user_role);
      if (response && response[0] && response[0].user_role) {
        const userRole = response[0].user_role;
    
        // Store the role in a cookie
        Cookies.set('userRole', userRole, { expires: 7, path: '' });
        console.log('Login successfully:', response);
        navigate('/dashboard');
      } else {
        console.error('Login failed: Response does not contain user data');
      }

   }
  return (
    <Box 
      className="relative flex items-center justify-center h-[100vh] bg-cover bg-center" 
      sx={{
        backgroundImage: `url(${LibraryImage})`,
      }}
    >
      {/* Overlay to dim the background */}
      <Box
        className="absolute inset-0 bg-black opacity-50"
        sx={{
          zIndex: 1,
        }}
      />

      <form
        className="relative flex flex-col gap-5 border border-gray-500 h-auto w-[500px] bg-white opacity-90 rounded-md px-5 py-20 z-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box className="text-dark h-auto max-w-[800px]">
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.5rem', md: '2.5rem' },
            }}   
            className='text-center'
          >
            Admin Login
          </Typography>
        </Box>
        <TextField
          label="Email"
          fullWidth
          {...register('user_email')}
          error={!!errors.user_email}
          helperText={errors.user_email?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          {...register('user_password')}
          error={!!errors.user_password}
          helperText={errors.user_password?.message}
        />
        <Button type="submit" variant="contained" fullWidth   sx={{ backgroundColor: '#19B37E' }} >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Login;
