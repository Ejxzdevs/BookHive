import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/dashboard'
import Product from './pages/product'
import {Routes , Route } from 'react-router-dom'
function App() {
  
  return (
   <div className='flex flex-row'>
      <Sidebar/>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Routes>
            <Route path='/' element={<Dashboard/> }/>
            <Route path='/product' element={<Product/> }/> 
        </Routes>
      </main>
   </div>
  )
}

export default App
