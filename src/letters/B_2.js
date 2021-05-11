// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const bSign2 =  new GestureDescription('б');

// thumb
bSign2.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
bSign2.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft , 1.0)
bSign2.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

// index
bSign2.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
bSign2.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)

// middle
bSign2.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
bSign2.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.75)
bSign2.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)
bSign2.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75)
bSign2.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75)

// ring
bSign2.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
bSign2.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0)

// pinky
bSign2.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
bSign2.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0)
bSign2.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0)


