// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const eSign7 =  new GestureDescription('е');

// thumb
eSign7.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSign7.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
eSign7.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
eSign7.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);
eSign7.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);

// index, middle, ring, pinky
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    eSign7.addCurl(finger, FingerCurl.HalfCurl, 0.75);
    eSign7.addDirection(finger, FingerDirection.HorizontalLeft, 0.5); 
    eSign7.addDirection(finger, FingerDirection.HorizontalRight, 0.5);
    eSign7.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.25);
    eSign7.addDirection(finger, FingerDirection.DiagonalDownRight, 0.25);
}