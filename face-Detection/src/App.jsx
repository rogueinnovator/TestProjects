import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RunDetect from "./components/RunDetect";
// import WebcamCompoennt from "./components/WebcamComponent";
const App = () => {
  return (
    <div>
      <Router>
      <Header />
        <RunDetect />
        <Routes>
          {/* <Route path="/" element={<WebcamCompoennt />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
