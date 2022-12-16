import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Webcam from 'react-webcam'

function App() {

  return (
    <Webcam 
      audio={ false }
      width={350}
      height={350}
    />
  )
}

export default App
