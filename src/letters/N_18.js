// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const nSign18 =  new GestureDescription('н');

// thumb
nSign18.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
nSign18.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
nSign18.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
nSign18.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// ring
nSign18.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
nSign18.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.25);
nSign18.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);
nSign18.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// index, middle, pinky
for (let finger of [Finger.Index, Finger.Middle, Finger.Pinky]) {
    nSign18.addCurl(finger, FingerCurl.NoCurl, 1.0);
    nSign18.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}