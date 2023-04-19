import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ciccio from './components/Ciccio'

function App() {
  const [count, setCount] = useState(0)
  const [contatoreCiccio,setContatoreCiccio] = useState(0)

  return (
    <div className="App">
      <Ciccio valore={count} aggiorna = {setContatoreCiccio} contatore ={contatoreCiccio}/>
      <div>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Il valore del contatore in ciccio è{contatoreCiccio}
      </p>
    </div>
  )
}

export default App
