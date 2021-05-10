// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const rSign21 =  new GestureDescription('р');

// thumb
rSign21.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSign21.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
rSign21.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index 
rSign21.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rSign21.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
rSign21.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle
rSign21.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
rSign21.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
rSign21.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring 
rSign21.addCurl(Finger.Ring , FingerCurl.NoCurl, 1.0);
rSign21.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// pinky
rSign21.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
rSign21.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
rSign21.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
