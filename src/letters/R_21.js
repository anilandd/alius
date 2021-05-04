// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const rSign21 =  new GestureDescription('р');

// thumb
rSign21.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
rSign21.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
rSign21.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
rSign21.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index 
rSign21.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rSign21.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// middle
rSign21.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
rSign21.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.25);
rSign21.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);
rSign21.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.2);

// ring 
rSign21.addCurl(Finger.Ring , FingerCurl.NoCurl, 1.0);
rSign21.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// pinky
rSign21.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
rSign21.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
