import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
   <div className='flex flex-row'>
      <Sidebar/>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
   </div>
  )
}

export default App
