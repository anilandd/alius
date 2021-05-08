// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const dgSign9 =  new GestureDescription('ж');

// thumb
dgSign9.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
dgSign9.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
dgSign9.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// index
dgSign9.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
dgSign9.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
dgSign9.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle
dgSign9.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
dgSign9.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
dgSign9.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring
dgSign9.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
dgSign9.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
dgSign9.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky
dgSign9.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
dgSign9.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
dgSign9.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
