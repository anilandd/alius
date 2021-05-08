// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const oSign19 =  new GestureDescription('о');

// thumb
oSign19.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oSign19.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
oSign19.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
oSign19.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index
oSign19.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
oSign19.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
oSign19.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle
oSign19.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
oSign19.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
oSign19.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring
oSign19.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
oSign19.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.75);
oSign19.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
oSign19.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

// pinky
oSign19.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
oSign19.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.75);
oSign19.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
oSign19.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
