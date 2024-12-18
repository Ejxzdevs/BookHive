import { NavLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';

interface Menu {
  name: string;
  path: string;
}

const Menus: Menu[] = [
  { name: 'Home', path: '/' },
  { name: 'Books', path: '/Books' },
  { name: 'About', path: '/About' },
  { name: 'Contact', path: '/Contact' },
];

const Navigation = () => {
  return (
    <AppBar className='h-[60px]' position="sticky" sx={{ backgroundColor: '#19B37E' }}>
      <Toolbar>
        {/* Logo or brand name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {Menus.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#fff' : '#ccc',
              })}
            >
              <Button sx={{ color: 'white' }}>{menu.name}</Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
