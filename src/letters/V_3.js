// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const vSign3 =  new GestureDescription('б');

// thumb, index, middle, ring, pinky
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    vSign3.addCurl(finger, FingerCurl.NoCurl, 1.0);
    vSign3.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}