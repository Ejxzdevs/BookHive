import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box , Button, List, ListItem, Typography } from '@mui/material';
import Logo from '../assets/Books.png';

interface Menu {
  name: string;
  icon: JSX.Element;  // Make sure the icon is of JSX.Element type
  path: string;
}

const Menus: Menu[] = [
  { name: 'Dashboard', icon: <HomeIcon />, path: '/dashboard' },
  { name: 'Books', icon: <BookIcon />, path: '/product' },
  { name: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { name: 'Logout', icon: <ExitToAppIcon />, path: '/logout' }
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    Cookies.remove('userRole', { path: '' });
    navigate('/admin');
  };

  return (
    <Box className={`${open ? "w-[250px]" : "w-[70px]"} duration-300 h-screen shadow-md border relative`}>
      <Box className='ps-4 flex flex-row items-center  gap-1 relative h-[70px] '>
        <img src={Logo} alt="LOGO" className='h-[30px]'/>
        <Typography 
          component="h5" 
          sx={{ fontFamily: 'Rubik Vinyl',
            color: '#19B37E',
            fontWeight: '500',
            fontSize: '24px'
           }} className={` ${open ? "block" : "hidden"}`} >
            BookHive
            </Typography>
        <Button onClick={() => setOpen(!open)} className={` text-white  absolute  ${open ? "left-[30px]" : "right-[24px]"}`} >
          <ArrowForwardIcon/>
        </Button>
      </Box>
      <Box>
        <List className='cursor-pointer'>
          {Menus.map((menu, index) => {
            // If the current menu is 'Logout', we handle it separately
            if (menu.name === 'Logout') {
              return (
                <ListItem className='border p-4 flex flex-row gap-2 hover:text-[#19B37E] focus:text-[#19B37E]' key={index} onClick={logout}>
                  <Box>{menu.icon}</Box>
                  <Typography component="span" className={`${open ? "block" : "hidden"}`}>{menu.name}</Typography>
                </ListItem>
              );
            }

            return (
                <NavLink className='border p-4 flex flex-row gap-2 hover:text-[#19B37E] focus:text-[#19B37E]'  to={menu.path} key={index}>
                  <Box>{menu.icon}</Box>
                  <Typography component="span" className={`${open ? "block" : "hidden"}`}>{menu.name}</Typography>
                </NavLink>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
