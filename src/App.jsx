import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Webcam from 'react-webcam'

function App() {

  return (
    <Webcam 
      audio={ false }
    />
  )
}

export default App
