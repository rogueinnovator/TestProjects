import faceapi from "./face-api.min";
const RunDetect = async (net, webcamref, canvasref) => {
  console.log(faceapi, "this is faceapi");
  await Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri("./models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
    faceapi.nets.ageGenderNet.loadFromUri("./models"),
  ]);
  if (
    typeof webcamref.current !== "undefined" &&
    webcamref.current !== null &&
    webcamref.current.video.readyState === 4
  ) {
    const video = webcamref.current.video;
    const videoWidth = webcamref.current.video.videoWidth;
    const videoHeight = webcamref.current.video.videoHeight;

    webcamref.current.video.width = videoWidth;
    webcamref.current.video.height = videoHeight;

    canvasref.current.width = videoWidth;
    canvasref.current.height = videoHeight;

    const face = await net.estimateFaces(video);
    console.log(face);
  }
};

export default RunDetect;
