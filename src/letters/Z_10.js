// import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// define gesture description
export const zSign10 =  new GestureDescription('з');

// thumb
zSign10.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
zSign10.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
zSign10.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
zSign10.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);
zSign10.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);

// index
zSign10.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.5);
zSign10.addCurl(Finger.Index, FingerCurl.NoCurl, 0.5);
zSign10.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
zSign10.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
zSign10.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle, ring, pinky
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {

    zSign10.addCurl(finger, finger.FullCurl, 1.0);
    zSign10.addDirection(finger, FingerDirection.VerticalUp, 0.2);
    zSign10.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
    zSign10.addDirection(finger, FingerDirection.HorizontalLeft, 0.2);

    zSign10.addCurl(finger, FingerCurl.NoCurl, 1.0);
    zSign10.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

