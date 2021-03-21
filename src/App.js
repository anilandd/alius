import React, {useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
// import logo from './logo.svg';
import './App.css';
// import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.development'; // ?
import { drawHand } from "./utilities";


function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);  

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose model is loaded.');
    // continuous detection in a loop
    setInterval(()=>{
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // validation of dtoIn
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // get video properties
      const video = webcamRef.current.video;
      // video.style.transform = 'scale(-1, 1)';
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      // set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      // set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height =videoHeight;
      // make detections
      const hand = await net.estimateHands(video);
      console.log(hand);
      // draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  runHandpose();

  return (
    <div className="App">
      <header className="App-header">
      <Webcam 
        ref={webcamRef}
        style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:9,
          width:640,
          height:480
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:9,
          width:640,
          height:480
        }}
      />
      </header>
    </div>
  );
}

export default App;
