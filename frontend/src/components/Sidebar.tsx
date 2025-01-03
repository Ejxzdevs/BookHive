import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

interface Menu {
  name: string;
  icon: string;
  path: string;
}

const Menus: Menu[] = [
  { name: 'Dashboard', icon: 'A', path: '/' },
  { name: 'Books', icon: 'A', path: '/product' },
  { name: 'Settings', icon: 'A', path: '/' },
  { name: 'Logout', icon: 'A', path: '/' }
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const naviagate = useNavigate();

  // Logout function
  const logout = () => {
    Cookies.remove('userRole', { path: '' });
    naviagate('/admin');
  };

  return (
    <aside className={`${open ? "w-[230px]" : "w-[50px]"} duration-300 h-screen shadow-md border relative`}>
      <header className='p-6 flex'>
        <h1>logo</h1>
        <button onClick={() => setOpen(!open)} className='absolute top-7 right-0 w-7 rounded-md bg-blue-600'>X</button>
      </header>
      <nav>
        <ul className='cursor-pointer'>
          {Menus.map((menu, index) => {
            // If the current menu is 'Logout', we handle it separately
            if (menu.name === 'Logout') {
              return (
                <li className='border p-4 flex gap-2' key={index} onClick={logout}>
                  <p>{menu.icon}</p>
                  <span className={`${open ? "block" : "hidden"}`}>{menu.name}</span>
                </li>
              );
            }

            return (
              <li className='border p-4 flex gap-2' key={index}>
                <NavLink to={menu.path}>
                  <p>{menu.icon}</p>
                  <span className={`${open ? "block" : "hidden"}`}>{menu.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
