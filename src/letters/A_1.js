// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const aSign1 =  new GestureDescription('а');

// thumb
aSign1.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75)
aSign1.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft , 0.75)
aSign1.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75)

// index
aSign1.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
aSign1.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.75)
aSign1.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75)
aSign1.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.75)

// middle
aSign1.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
aSign1.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.75)
aSign1.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75)
aSign1.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75)

// ring
aSign1.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
aSign1.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.75)
aSign1.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.75)
aSign1.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.75)

// pinky
aSign1.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
aSign1.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.75)
aSign1.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.75)
aSign1.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75)


