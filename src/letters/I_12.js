// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const iSign12 =  new GestureDescription('i');

// thumb
iSign12.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSign12.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
iSign12.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index
iSign12.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
iSign12.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
iSign12.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle
iSign12.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
iSign12.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
iSign12.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring
iSign12.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
// iSign12.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
iSign12.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
iSign12.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

// Pinky
iSign12.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iSign12.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

