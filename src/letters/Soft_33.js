// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const softSign33 =  new GestureDescription('ь');

// thumb
softSign33.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
softSign33.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
softSign33.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// index
softSign33.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
softSign33.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// middle, ring, pinky
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    softSign33.addCurl(finger, FingerCurl.FullCurl, .75);
    softSign33.addDirection(finger, FingerDirection.VerticalUp, 0.25); 
}