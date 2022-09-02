import { useState } from 'react'
import Footer from './Footer'
import Hlogo from './assets/HeaderLogo.png'
import ContentConatainer from './ContentContainer'
import sensitiveimage from './assets/sensitiveskin.png'
import dryimage from './assets/dryskin.png'
import './App.css'
import contt from './assets/content.json'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Header'>
      <img className="Header Img" src={Hlogo} />
      </div> 
      <div className='mainContainer'>
        <ContentConatainer imgRight={contt.sensitive.imgRight} imgsrc={sensitiveimage} content={contt.sensitive.content}/>
        <ContentConatainer imgRight={contt.Dry.imgRight} imgsrc={dryimage} content={contt.Dry.content} />
      </div>                 
      <Footer />
    </div>
  )
}

export default App