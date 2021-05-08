// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const nSign18 =  new GestureDescription('н');

// thumb
nSign18.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
nSign18.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
nSign18.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
nSign18.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
nSign18.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);

// index
nSign18.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
nSign18.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
nSign18.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle
nSign18.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// nSign18.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);Middle
nSign18.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
nSign18.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring
nSign18.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
nSign18.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.75);
nSign18.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// pinky
nSign18.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
nSign18.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);