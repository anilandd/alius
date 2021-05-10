// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const sSign22 =  new GestureDescription('с');

// thumb
sSign22.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
sSign22.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
sSign22.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// index
sSign22.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
sSign22.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
sSign22.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle
sSign22.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
sSign22.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
sSign22.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring
sSign22.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
sSign22.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
sSign22.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky
sSign22.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
sSign22.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
sSign22.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);