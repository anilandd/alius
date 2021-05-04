// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const oSign19 =  new GestureDescription('о');

// thumb
oSign19.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
oSign19.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
oSign19.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);
oSign19.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
oSign19.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
oSign19.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);
oSign19.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);

// index
oSign19.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
oSign19.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.75);
oSign19.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.75);
oSign19.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
oSign19.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);
oSign19.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.25);
oSign19.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.25);

// middle, ring, pinky
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    oSign19.addCurl(finger, FingerCurl.HalfCurl, 0.75);
    oSign19.addCurl(finger, FingerCurl.NoCurl, 0.25);
    oSign19.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.75);
    oSign19.addDirection(finger, FingerDirection.DiagonalUpRight, 0.75);
    oSign19.addDirection(finger, FingerDirection.VerticalUp, 0.5); 
    oSign19.addDirection(finger, FingerDirection.HorizontalRight, 0.25);
    oSign19.addDirection(finger, FingerDirection.HorizontalLeft, 0.25);
}