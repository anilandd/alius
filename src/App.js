import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
// import logo from './logo.svg';
import './App.css';
// import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.development'; // ?
import { drawHand } from "./utilities";
import * as fp from 'fingerpose';

import {aSign1} from './letters/A_1';
import {vSign3} from './letters/V_3';
import {gSign4} from './letters/G_4';
import {eSign7} from './letters/E_7';
import {dgSign9} from './letters/Dg_9';
import {zSign10} from './letters/Z_10';
import {iSign12} from './letters/I_12';
import {nSign18} from './letters/N_18';
import {oSign19} from './letters/O_19';
import {pSign20} from './letters/P_20';
// import {rSign21} from './letters/R_21';
import {sSign22} from './letters/S_22';
// import {tSign23} from './letters/T_23';
// import {shSign29} from './letters/Sh_29';
// import {softSign33} from './letters/Soft_33';



import thumbs_up from "./thumbs_up.png";
import v_example from "./vSign3.png";


import { Reduction } from '@tensorflow/tfjs';


function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);  

  const [sign, setSign] = useState(null);

  const images = {
    thU: thumbs_up,
    3: v_example
  };


  const runHandpose = async () => {
    const net = await handpose.load();
    // console.log('Handpose model is loaded.');

    console.log('Модель завантажена.');

    // continuous detection in a loop
    setInterval(()=>{
      detect(net);
    }, 100);
  };

  const detect = async (net) => {

    // validation of dtoIn
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {

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

      // сontinuos gesture detections
      if (hand.length > 0) {

        const GE = new fp.GestureEstimator([
          // fp.Gestures.ThumbsUpGesture,
          aSign1,
          vSign3,
          gSign4,
          eSign7,
          dgSign9,
          zSign10,
          iSign12,
          nSign18,
          oSign19,
          pSign20,
          // rSign21
          sSign22
          // tSign23,
          // shSign29,
          // softSign33
        ]);

        // get only gestures with 8+ confidance
        const gesture = await GE.estimate(hand[0].landmarks, 8);

        // for target sign
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {

          // all detected gestures
          console.log(gesture.gestures);

          for (let g = 0; g < gesture.gestures.length; g++) {
            
            // for vSign3
            if (GE.gestures[1].name == gesture.gestures[g].name) {
              console.log("В is made!");
              console.log(gesture.gestures[g].name);
              setSign(gesture.gestures[g].name);
            }

          }

        }

        // // for all possible gestures
        // if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
        //   console.log(gesture.gestures);
        //   const confidence = gesture.gestures.map(
        //     (prediction) => prediction.confidence
        //   );
        //   const maxConfidence = confidence.indexOf(
        //     Math.max.apply(null, confidence)
        //   );
        //   setSign(gesture.gestures[maxConfidence].name);
        //   console.log("Gesture detected!");
        //   console.log(gesture.gestures[maxConfidence].name);
        // }

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
            top: 0,
            left:0,
            right:0,
            textAlign:"center",
            zIndex:8,
            width: '70vw',
            height: '50vh',
            maxWidth: 640,
            maxHeight: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position:"absolute",
            marginLeft:"auto",
            marginRight:"auto",
            top: 0,
            left:0,
            right:0,
            textAlign:"center",
            zIndex:9,
            width: '70vw',
            height: '50vh',
            maxWidth: 640,
            maxHeight: 480,
          }}
        />
        {/* {sign !== null ? <img src={images[thumbs_up]} style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 400,
          bottom: 500,
          right: 0,
          textAlign: "center",
          height: 100,
          zIndex:10,
        }} />: ""} */}

        <img src={images[3]} style={{
            position: "absolute",
            top: '55vh',
            bottom: '15vh',
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            zIndex: 10,
            width: '30vh',
            height: '10vw',
            }} />


        {/* {sign !== null ? 
          <img src={images[v_example]} style={{
            position: "absolute",
            top: '55vh',
            bottom: '15vh',
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            zIndex: 10,
            width: '30vh',
            height: '30vw',
            }} />: ""} */}
        {sign !== null ? 
          <div style={{
            position: "absolute",
            bottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            zIndex: 10,
            width: '70vh',
            height: '10vw',
        }}>
          Вірно! 
        </div> : ""}

      </header>
    </div>
  );
}

export default App;
