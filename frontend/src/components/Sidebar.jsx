import {useState} from 'react'

const Menus = [
    { name: 'Dashborad', icon: 'A' },
    { name: 'Books', icon: 'A' },
    { name: 'Settings', icon: 'A' },
    { name: 'Logout', icon: 'A' }
  ];

const Sidebar = () => {
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
                        <p>{menu.icon}</p>
                        <span className={`${open ? "block" : "hidden" }`} >{menu.name}</span>      
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
