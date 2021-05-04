// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const gSign4 =  new GestureDescription('г');

// thumb
gSign4.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign4.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
gSign4.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// index
gSign4.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gSign4.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.25);

// middle, ring, pinky
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    gSign4.addCurl(finger, FingerCurl.FullCurl, .75);
    gSign4.addDirection(finger, FingerDirection.VerticalDown, 0.25); 
}