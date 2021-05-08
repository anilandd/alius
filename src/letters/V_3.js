// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const vSign3 =  new GestureDescription('в');

// thumb 
vSign3.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// vSign3.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.0);
vSign3.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// vSign3.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
// vSign3.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

// index
vSign3.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// vSign3.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.0);
vSign3.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
// vSign3.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);
// vSign3.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.75);

// middle 
vSign3.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// vSign3.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.0);
vSign3.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
// vSign3.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);
// vSign3.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75);

// ring
vSign3.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
vSign3.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.0);
vSign3.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
// vSign3.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.75);
// vSign3.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.75);

// pinky 
vSign3.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
// vSign3.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.0);
vSign3.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
// vSign3.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.75);
// vSign3.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75);
