import React, { useEffect } from 'react';
import * as faceapi from 'face-api.js'; // Import the face-api.js library

const FaceCanvas = () => {

  useEffect(() => {
    const drawFaceDetection = async () => {
      // Access the canvas element
      const canvas = document.getElementById("canvas");

      // Access the face image element
      const faceImage = document.getElementById("face");

      // Set canvas size and position
      canvas.style.left = faceImage.offsetLeft;
      canvas.style.top = faceImage.offsetTop;
      canvas.height = faceImage.height;
      canvas.width = faceImage.width;

      // Detect faces and get additional data (landmarks, descriptors, age, gender)
      let faceAIData = await faceapi
        .detectAllFaces(faceImage)
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withAgeAndGender();

      // Resize face data to fit canvas
      faceAIData = faceapi.resizeResults(faceAIData, faceImage);

      // Draw face detections on canvas
      faceapi.draw.drawDetections(canvas, faceAIData);

      // Draw text fields for gender and age
      faceAIData.forEach((face) => {
        const { age, gender, genderProbability } = face;
        const genderText = `${gender} - ${genderProbability}`;
        const ageText = `${Math.round(age)} years`;
        const textField = new faceapi.draw.DrawTextField(
          [genderText, ageText],
          face.detection.box.bottomLeft,
        );
        textField.draw(canvas);
      });
    };

    drawFaceDetection(); // Draw face detection when component mounts

  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
<canvas id></canvas>  );
};

export default FaceCanvas;

