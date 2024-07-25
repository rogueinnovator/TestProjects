import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import React from "react";
import runDetect from "./RunDetect";

const LoadFaceMesh = async () => {
  const net = await facemesh.load({
    inputResolution: { width: 640, height: 480 },
    scale: 0.8,
  });
  setInterval(() => {
    runDetect(net);
  }, 100);
  //   return <div>laodFaceMesh</div>;
};

export default LoadFaceMesh;
// import * as facemesh from "@tensorflow-models/face-landmarks-detection";
// import React, { useEffect } from "react";
// import runDetect from "./RunDetect";
// useEffect(() => {
//   const LoadFAce = async () => {
//     try {
//       const net = await facemesh.load(
//         facemesh.SupportedPackages.mediapipeFacemesh
//       );
//       setInterval(() => {
//         detect(net);
//       }, 100);
//     } catch (error) {
//       console.error(error);
//     }

//   return <div>Loading FaceMesh model...</div>; // Optional loading message
// };

// export default LoadFaceMesh;
