// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const eSign7 =  new GestureDescription('е');

// thumb
eSign7.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
eSign7.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
eSign7.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
eSign7.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
eSign7.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
eSign7.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

// index
eSign7.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
eSign7.addCurl(Finger.Index, FingerCurl.FullCurl, 0.75);
eSign7.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0); 
eSign7.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
eSign7.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);
eSign7.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.75)

// middle
eSign7.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
eSign7.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.75);
eSign7.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0); 
eSign7.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
eSign7.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);
eSign7.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75)

// ring
eSign7.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
eSign7.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.75);
eSign7.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0); 
eSign7.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
eSign7.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.75);
eSign7.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.75)

// pinky
eSign7.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
eSign7.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.75);
eSign7.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0); 
eSign7.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
eSign7.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.75);
eSign7.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75)
