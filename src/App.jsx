import './App.css'
import Camera, { FACING_MODES } from 'react-html5-camera-photo'
import Webcam from 'react-webcam'
import { Fragment } from 'react'

function App() {
  const handleCameraStart = (stream) => console.log('handleCameraStart')
  return (
    <Fragment>
      <div>react-webcam</div>
      <Webcam 
        audio={ false }
        width={350}
        height={350}
      />
      <div>react-html5</div>
      <Camera 
        isImageMirror={ true }
        idealFacingMode={ FACING_MODES.USER}
        idealResolution={{ width: 350, height: 350 }}
        onCameraStart={ handleCameraStart }
      />
    </Fragment>
  )
}

export default App
