// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const zSign10 =  new GestureDescription('з');

// thumb
zSign10.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
zSign10.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
zSign10.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index
zSign10.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
zSign10.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
zSign10.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

//middle
zSign10.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
zSign10.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
zSign10.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring
zSign10.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
zSign10.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
zSign10.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky
zSign10.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
zSign10.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.75);
zSign10.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
zSign10.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

