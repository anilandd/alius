// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const iSign12 =  new GestureDescription('i');

// thumb
iSign12.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.75);
iSign12.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.25);

// index, middle, ring
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    iSign12.addCurl(finger, FingerCurl.FullCurl, .75);
    iSign12.addDirection(finger, FingerDirection.VerticalDown, 0.25); 
}

// pinky 
iSign12.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iSign12.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);


// // thumb
// iSign12.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// iSign12.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
// iSign12.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// // index
// iSign12.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// iSign12.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// // middle, ring, pinky
// for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
//     iSign12.addCurl(finger, FingerCurl.FullCurl, .75);
//     iSign12.addDirection(finger, FingerDirection.VerticalDown, 0.25); 
// }