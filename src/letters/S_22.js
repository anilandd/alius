// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const sSign22 =  new GestureDescription('с');

// thumb
sSign22.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
sSign22.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
sSign22.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.25);
// sSign22.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
sSign22.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
sSign22.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);
sSign22.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
sSign22.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// index
sSign22.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
sSign22.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.75);
sSign22.addCurl(Finger.Index, FingerCurl.NoCurl, 0.25);
// sSign22.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
sSign22.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.75);
sSign22.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.75);
sSign22.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.25);
sSign22.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.25);

// middle
sSign22.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
sSign22.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.75);
sSign22.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.25);
// sSign22.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
sSign22.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.75);
sSign22.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.75);
sSign22.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.25);
sSign22.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.25);

// ring
sSign22.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
sSign22.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.75);
sSign22.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.25);
// sSign22.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
sSign22.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.75);
sSign22.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.75);
sSign22.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.25);
sSign22.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.25);

// pinky
sSign22.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
sSign22.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.75);
sSign22.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.25);
// sSign22.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);
sSign22.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.75);
sSign22.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.75);
sSign22.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.25);
sSign22.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.25);