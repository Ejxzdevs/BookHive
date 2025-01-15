import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import { Box , Button, List, Typography } from '@mui/material';
import Logo from '../assets/Books.png';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PieChartIcon from '@mui/icons-material/PieChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


interface Menu {
  name: string;
  icon: JSX.Element;
  path: string;
}

const Menus: Menu[] = [
  { name: 'Dashboard', icon: <HomeIcon/>, path: '/dashboard' },
  { name: 'Books', icon: <BookIcon/>, path: '/products' },
  { name: 'Request', icon: <SendIcon/>, path: '/request' },
  { name: 'Inquiry', icon: <HelpOutlineIcon/>, path: '/inquiry' },
  { name: 'News', icon: <NewspaperIcon/>, path: '/news' },
  { name: 'Reports', icon: <PieChartIcon/>, path: '/reports' },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

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
        <Button onClick={() => setOpen(!open)} className={` text-white  absolute  ${open ? "left-[25px] transform -rotate-180" : "right-[24px]"}`} >
          <ArrowForwardIcon/>
        </Button>
      </Box>
      <Box>
        <List className='cursor-pointer'>
          {Menus.map((menu, index) => {
            return (
                <NavLink className='border p-4 flex flex-row gap-2 hover:text-[#37ad84] focus:text-[#19B37E]'  to={menu.path} key={index}>
                  <Box sx={{color: '#19B37E'}} >{menu.icon}</Box>
                  <Typography sx={{fontFamily: 'Inter'}} component="span" className={`${open ? "block" : "hidden"}`}>{menu.name}</Typography>
                </NavLink>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
