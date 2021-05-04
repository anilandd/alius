// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const tSign23 =  new GestureDescription('п');

// thumb
tSign23.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
tSign23.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
// tSign23.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
tSign23.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

// index 
tSign23.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
tSign23.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// middle
tSign23.addCurl(Finger.Middle , FingerCurl.NoCurl, 1.0);
tSign23.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

// ring
tSign23.addCurl(Finger.Ring , FingerCurl.NoCurl, 1.0);
tSign23.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

// pinky
tSign23.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
tSign23.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);
tSign23.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

