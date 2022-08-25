import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './Footer'
import Hlogo from './assets/HeaderLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Header'>
      <img className="Header Img" src={Hlogo} width={100} height={45} />
      </div>      
      <Footer />
    </div>
  )
}

export default App