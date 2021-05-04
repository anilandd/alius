// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const shSign29 =  new GestureDescription('ш');

// thumb
shSign29.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
shSign29.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
shSign29.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
shSign29.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index, middle, ring
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    shSign29.addCurl(finger, FingerCurl.NoCurl, 1.0);
    shSign29.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// pinky:
shSign29.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
shSign29.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.2);
shSign29.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);
shSign29.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);