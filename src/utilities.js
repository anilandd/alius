
// points of finger 
const fingerJoints = {
    thumb: [0,1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};



//  drawing function
export const drawHand = (predictions, ctx) => {
    // check if we have predictions
    if (predictions.length > 0) {
        predictions.forEach((prediction) => {
            // recive landmarks
            const landmarks = prediction.landmarks;

            // loop through fingers
            for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
                let finger = Object.keys(fingerJoints)[j];
                // loop through pairs of joints
                for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
                    // gets pair of joints
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJointIndex = fingerJoints[finger][k+1];
                    // draw link
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1]
                    );
                    ctx.lineTo(
                        landmarks[secondJointIndex][0],
                        landmarks[secondJointIndex][1]
                    );
                    ctx.strokeStyle = "plum";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }

            // loop and draw
            for (let i = 0; i < landmarks.length; i++) {
                // get x
                const x = landmarks[i][0];
                // get y
                const y = landmarks[i][1];
                // drawign
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 * Math.PI);
                ctx.fillStyle = "red";
                ctx.fill();
            }
        });
    };
};