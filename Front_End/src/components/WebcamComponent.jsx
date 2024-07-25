import React, { useRef } from "react";
import Webcam from "react-webcam";
import LoadFaceMesh from "./LoadFaceMesh";

const WebcamComponent = () => {
  const webcamref = useRef(null);
  const canvasref = useRef(null);

  return (
    <div>
      <Webcam
        className="absolute rounded-full mx-auto left-0 right-0 w-auto h-auto "
        ref={webcamref}
      ></Webcam>
      <canvas
        ref={canvasref}
        className="absolute rounded-full mx-auto left-0 right-0 w-auto h-auto"
      ></canvas>
      <LoadFaceMesh webcamref={webcamref} canvasref={canvasref}></LoadFaceMesh>
    </div>
  );
};

export default WebcamComponent;
