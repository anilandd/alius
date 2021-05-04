// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const vSign3 =  new GestureDescription('в');

// thumb 
vSign3.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.75);
vSign3.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);

// index
vSign3.addCurl(Finger.Index, FingerCurl.NoCurl, 0.75);
vSign3.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);

// middle 
vSign3.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.75);
vSign3.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);

// ring
vSign3.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.75);
vSign3.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75);

// pinky 
vSign3.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.75);
vSign3.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
