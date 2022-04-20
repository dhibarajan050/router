import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./views/Test/Test";
import HomePage from "./views/Home/Home";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
