import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
