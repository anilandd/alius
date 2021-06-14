// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const gaSign5 =  new GestureDescription('ґ');

// thumb
gaSign5.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
gaSign5.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
gaSign5.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);
gaSign5.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeftt, 1.0);

// index
gaSign5.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gaSign5.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// middle 
gaSign5.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
gaSign5.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0)

// ring
gaSign5.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
gaSign5.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0)

// pinky 
gaSign5.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
gaSign5.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0)
