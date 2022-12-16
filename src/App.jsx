import './App.css'
import { Camera } from 'react-camera-pro'
import Webcam from 'react-webcam'
import { Fragment } from 'react'

function App() {

  return (
    <Fragment>
      <div>react-webcam</div>
      <Webcam 
        audio={ false }
        width={350}
        height={350}
      />
      <div>react-camera-pro</div>
      <Camera 
        aspectRatio={16/9}
        facingMode='user'
      />
    </Fragment>
  )
}

export default App
