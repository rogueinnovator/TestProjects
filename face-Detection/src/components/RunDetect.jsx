import React, { useEffect } from "react";
import * as faceapi from "face-api.js";
// import FaceCanvas from './FaceCanvas';
const RunDetect = () => {
  const faceImage = process.env.PUBLIC_URL + "/images/Profile.JPG";
  if (faceImage == true) {
    console.log("face data is true");
  } 
  else{
    console.log("no data found")
  }
  const runFaceDetection = async () => {
    // Load face detection models
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("./models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
      faceapi.nets.ageGenderNet.loadFromUri("./models"),
    ]).then(() => {
      DetectTheFace();
    });
    // Access the face image element
    // const faceImage = document.getElementById("face");
 
    // Detect faces and get additional data (landmarks, descriptors, age, gender)
    const DetectTheFace = () => {
      setInterval(async () => {
        let faceAIData = await faceapi
          .detectAllFaces(faceImage)
          .withFaceLandmarks()
          .withFaceDescriptors()
          .withAgeAndGender();

        console.log("Face data: ", faceAIData);
      }, 1000);
    };
  };

  runFaceDetection(); // Run face detection when component mounts
  // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      {/* <FaceCanvas /> */}
    </div>
  );
};

export default RunDetect;
