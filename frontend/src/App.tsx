import './App.css'
import Sidabar from './components/Sidebar'
function App() {

  return (
   <div className='flex flex-row'>
      <Sidabar/>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
   </div>
  )
}

export default App
