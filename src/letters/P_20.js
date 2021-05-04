// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const pSign20 =  new GestureDescription('п');

// thumb
pSign20.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
pSign20.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
pSign20.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
pSign20.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

// index, middle
for (let finger of [Finger.Index, Finger.Middle]) {
    pSign20.addCurl(finger, FingerCurl.NoCurl, 1.0);
    pSign20.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

// ring, pinky
for (let finger of [Finger.Ring, Finger.Pinky]) {
    pSign20.addCurl(finger, FingerCurl.FullCurl, 1.0);
    // pSign20.addDirection(finger, FingerDirection.VerticalDown, 0.2);
    pSign20.addDirection(finger, FingerDirection.DiagonalDownLeft, 1.0);
    pSign20.addDirection(finger, FingerDirection.HorizontalLeft, 0.2);
}
