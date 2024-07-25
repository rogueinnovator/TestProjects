import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RunDetect from "./components/RunDetect";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <RunDetect />
        {/* <MetaMaskConnection/> */}
        <Routes>
          {/* <Route path="/" element={<SignUpPage />} /> */}
          {/* <Route path="/home" element={<Home />}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
