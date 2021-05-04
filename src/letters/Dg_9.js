// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const dgSign9 =  new GestureDescription('ж');

// thumb
dgSign9.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
dgSign9.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.75);
dgSign9.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.75);
dgSign9.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);
dgSign9.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);

// index, middle, ring, pinky
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    dgSign9.addCurl(finger, FingerCurl.NoCurl, 0.75);
    dgSign9.addDirection(finger, FingerDirection.HorizontalLeft, 0.5); 
    dgSign9.addDirection(finger, FingerDirection.HorizontalRight, 0.5);
    dgSign9.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.25);
    dgSign9.addDirection(finger, FingerDirection.DiagonalDownRight, 0.25);
}