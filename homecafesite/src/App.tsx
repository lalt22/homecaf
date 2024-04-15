import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Sound from './components/Sound/Sound'

function App() {

  return (
    <div className='home-wrapper'>
       <NavBar />
      <div className='welcome-wrapper'>
    
        <img className='cup' src='./src/coffee-cup.png'/>
        <Sound asset='./src/sound_assets/grinding-coffee-beans-27938.mp3' name='Beans Grinding'/>
        <Sound asset='./src/sound_assets/drip-coffee-33785.mp3' name='Drip Coffee'/>
        <Sound asset='./src/sound_assets/coffee-machine-170428_1486-25738.mp3' name='Machine' />
        <Sound asset='./src/sound_assets/ambience-cafe001-52520.mp3' name='Ambience' />
      </div>
    </div>
    
  )
}

export default App
