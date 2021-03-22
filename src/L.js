// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const lSign =  new GestureDescription('l');

// thumb
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
lSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// index
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// middle, ring, pinky
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    lSign.addCurl(finger, FingerCurl.FullCurl, .75);
    lSign.addDirection(finger, FingerDirection.VerticalDown, 0.25); 
}