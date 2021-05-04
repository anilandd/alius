// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const aSign1 =  new GestureDescription('а');

// thumb
aSign1.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// aSign1.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
// aSign1.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// index, middle, ring, pinky
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    aSign1.addCurl(finger, FingerCurl.FullCurl, 1.0);
    aSign1.addDirection(finger, FingerDirection.VerticalDown, 1.0); 
}