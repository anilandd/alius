// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const gSign4 =  new GestureDescription('г');

// thumb
gSign4.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign4.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
gSign4.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// index
gSign4.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gSign4.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// middle 
gSign4.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
gSign4.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0)

// ring
gSign4.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
gSign4.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0)

// pinky 
gSign4.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
gSign4.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0)
