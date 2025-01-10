import { Box, ListItem, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import {  useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openOption = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    Cookies.remove('userRole', { path: '' });
    navigate('/admin');
  };

  return (
    <Box
      className="border-b border-gray-500 h-[60px] flex items-center justify-end"
      sx={{ backgroundColor: '#19B37E' }}
    >
        <AccountCircleIcon onClick={openOption}  sx={{ fontSize: 35 }}  className="text-white cursor-pointer me-2"  />
      {open ? (
        <Box className="
        top-12 right-3 h-[250px] w-[225px] shadow-xl 
        rounded cursor-pointer bg-[#FFFFFF] absolute
        duration-300
        z-10
        ">
           <ListItem className=' border flex flex-row gap-2 hover:text-[#19B37E] focus:text-[#19B37E]' onClick={logout}>
                  <Box><ExitToAppIcon/></Box>
                  <Typography component="span" className={`${open ? "block" : "hidden"}`}>Logout</Typography>
            </ListItem>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
