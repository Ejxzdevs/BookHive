import {useState} from 'react'
import { NavLink } from 'react-router-dom'

interface Menu {
    name: string;
    icon: string;
    path: string;
  }
  
const Menus: Menu[] = [
    { name: 'Dashborad', icon: 'A', path: '/' },
    { name: 'Books', icon: 'A' , path: '/product' },
    { name: 'Settings', icon: 'A' , path: '/' },
    { name: 'Logout', icon: 'A' , path: '/' }
  ];

const Sidebar : React.FC = () => {
  const [open, setOpen] = useState(true)
  
  return (
    <aside className={`${open ? "w-[230px]" : "w-[50px]"} duration-300 h-screen shadow-md border relative `} >
        <header className='p-6 flex'>
            <h1>logo</h1>
            <button onClick={() => setOpen(!open)} className='absolute top-7 right-0 w-7 rounded-md bg-blue-600'>X</button>
        </header>
        <nav>
            <ul className='cursor-pointer'>
                {Menus.map((menu,index)=> {
                    return (
                    <li className='border p-4 flex gap-2' key={index}>
                        <NavLink to={menu.path} >
                          <p>{menu.icon}</p>
                          <span className={`${open ? "block" : "hidden" }`} >
                            {menu.name}
                          </span> 
                        </NavLink>     
                     </li>
                    )
                })}
                <li></li>
            </ul>

        </nav>
    </aside>
  )
}

export default Sidebar
