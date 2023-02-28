import { useState } from 'react'
import './App.css'
import Header from "./Components/Header/Header"
import {Footer} from "./Components/Footer/Footer"
import Main from './Components/Main/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Main />
    </div>
  )
}

export default App
