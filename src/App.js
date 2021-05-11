import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import './App.css';
// import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.development'; // ?
import { drawHand } from "./utilities";
import * as fp from 'fingerpose';

import {aSign1} from './letters/A_1';
import {bSign2} from './letters/B_2';
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
import a_example from "./letter_examples/aSign1.png";
import b_example from "./letter_examples/bSign2.png";
import v_example from "./letter_examples/vSign3.png";
import g_example from "./letter_examples/gSign4.png";
import ga_example from "./letter_examples/gaSign5.png";


import { Reduction, Sign } from '@tensorflow/tfjs';


function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);  

  

  const [sign, setSign] = useState("");
  const [taskSign, setTaskSign] = useState("");
  const [done, setDone] = useState(false);
  const [signNumber, setSignNumber] = useState(0);
  let numState = 0;
  const [example, setExample] = useState(true);

  

  const images = {
    // 0: thumbs_up,
    0: a_example,
    1: b_example,
    2: v_example,
    3: g_example,
    4: ga_example
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
        setDone(false);

        const GE = new fp.GestureEstimator([
          // fp.Gestures.ThumbsUpGesture,
          aSign1,
          bSign2,
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


        // for all possible gestures
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );


          // just detected gesture
          setSign(gesture.gestures[maxConfidence].name);
          console.log("now gesture: " + gesture.gestures[maxConfidence].name);
        
          // setTaskSign(GE.gestures[signNumber].name);
          console.log("your task : " + GE.gestures[numState].name);
          
          setExample(true)
          

        
          // user accomplished the task
          if (gesture.gestures[maxConfidence].name == GE.gestures[numState].name) {
            console.log("Gesture в detected!");
            setDone(true);

            numState = numState + 1;
            setSignNumber(prevNumber => prevNumber + 1);


            // setDone(false);
            setExample(false);

            // setTimeout(()=>{
            //   setDone(false);
            //   setExample(false);
            // }, 3000);
            
          }
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
            top: 0,
            left:0,
            right:0,
            textAlign:"center",
            zIndex:8,
            width: 640,
            height: 480,
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
            width: 640,
            height: 480,
          }}
        />

        {example == true ?
          <img src={images[signNumber]} style={{
            position: "absolute",
            top: '55vh',
            bottom: '15vh',
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            zIndex: 10,
            width: 200,
            height: 200,
            }} /> : ""}
        
        {done !== true ? 
          <div style={{
            position: "absolute",
            bottom: 10,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            zIndex: 10,
            width: '70vh',
            height: '10vw',
            padding: 10,
        }}>
          Покажіть літеру як на картинці!
          Номер картинки {signNumber}.
        </div> : ""}

        {done == true ? 
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
          Вірно! Ви показали {sign}!
        </div> : ""}

                {/* <div style={{
            position: "absolute",
            bottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            zIndex: 10,
            width: '70vh',
            height: '10vw',
        }}>
          <button onClick={() => setNumber(number+1)}>Наступна літера</button>
        </div> */}

        {/* <input style={{
            position: "absolute",
            bottom: 15,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            zIndex: 10,
            width: '70vh',
            height: '10vw',
            padding: 10,
        }}>
        </input> */}

      </header>
    </div>
  );
}

export default App;
