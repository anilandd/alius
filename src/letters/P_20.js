// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const pSign20 =  new GestureDescription('п');

// thumb
pSign20.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign20.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

// index
pSign20.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pSign20.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// middle
pSign20.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
pSign20.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

// ring
pSign20.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
pSign20.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0)

// pinky 
pSign20.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
pSign20.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0)