import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
// import logo from './logo.svg';
import './App.css';
// import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.development'; // ?
import { drawHand } from "./utilities";
import * as fp from 'fingerpose';
import thumbs_up from "./thumbs_up.png";


function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);  

  const [sign, setSign] = useState(null);
  const images = {thumbs_up: thumbs_up};

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
      
      // gesture detections
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture
        ])
        const gesture = await GE.estimate(hand[0].landmarks, 8);
        console.log(gesture);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setSign(gesture.gestures[maxConfidence].name);
          console.log("Gesture detected: " + sign);
        }
      }
      // draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  // runHandpose();
  useEffect(()=>{runHandpose()},[]);

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
        {sign !== null ? <img src={images[sign]} style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 400,
          bottom: 500,
          right: 0,
          textAlign: "center",
          height: 100,
          zIndex:10,
        }} />: ""}
        {/* {sign !== null ? <div style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 400,
          bottom: 500,
          right: 0,
          textAlign: "center",
          height: 100,
        }}>
          Detected! 
        </div> : ""} */}
      </header>
    </div>
  );
}

export default App;
